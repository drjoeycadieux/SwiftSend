'use client';

import { useState, useTransition, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { debounce } from 'lodash';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { emojiRecommendation } from '@/ai/flows/emoji-recommendation';
import { processTransfer } from '@/lib/actions/transfer';
import { Loader2, Wand2 } from 'lucide-react';

const transferSchema = z.object({
  recipient: z.string().email({ message: 'Please enter a valid email.' }),
  amount: z.coerce.number().positive({ message: 'Amount must be positive.' }),
  message: z.string().optional(),
});

type TransferFormValues = z.infer<typeof transferSchema>;

type EmojiSuggestion = {
  emoji: string;
  reason: string;
} | null;

export default function TransferForm() {
  const [isPending, startTransition] = useTransition();
  const [emojiSuggestion, setEmojiSuggestion] = useState<EmojiSuggestion>(null);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const { toast } = useToast();

  const form = useForm<TransferFormValues>({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      recipient: '',
      amount: 0,
      message: '',
    },
  });
  
  const debouncedEmojiSuggestion = useCallback(
    debounce(async (amount: number) => {
      if (amount > 0) {
        setIsSuggesting(true);
        try {
          const suggestion = await emojiRecommendation({ amount });
          setEmojiSuggestion(suggestion);
        } catch (error) {
          console.error('Error fetching emoji suggestion:', error);
          setEmojiSuggestion(null);
        } finally {
          setIsSuggesting(false);
        }
      } else {
        setEmojiSuggestion(null);
      }
    }, 500),
    []
  );

  const onSubmit = (data: TransferFormValues) => {
    startTransition(async () => {
      const result = await processTransfer(data);
      if (result?.error) {
        toast({
          variant: 'destructive',
          title: 'Transfer Failed',
          description: result.error,
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="recipient"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipient&apos;s Email</FormLabel>
              <FormControl>
                <Input placeholder="friend@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    type="number"
                    placeholder="100.00"
                    className="pl-7"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      debouncedEmojiSuggestion(Number(e.target.value));
                    }}
                  />
                </div>
              </FormControl>
              {isSuggesting && (
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Getting emoji suggestion...</span>
                </div>
              )}
              {emojiSuggestion && (
                 <div className="flex items-start text-sm bg-accent/30 border border-accent/50 rounded-md p-2 mt-2">
                   <Wand2 className="h-4 w-4 mr-2 mt-1 text-accent-foreground/80"/>
                   <div>
                     <span className="font-semibold">AI Suggestion:</span> {emojiSuggestion.emoji} &mdash; {emojiSuggestion.reason}
                   </div>
                 </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="For the weekend trip!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Money
        </Button>
      </form>
    </Form>
  );
}
