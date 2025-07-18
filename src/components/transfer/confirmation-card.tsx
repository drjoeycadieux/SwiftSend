'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';

export default function ConfirmationCard() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount');
  const recipient = searchParams.get('recipient');
  const transactionDate = new Date().toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(amount));

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="items-center text-center">
        <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
        <CardTitle className="text-2xl font-headline">Transfer Successful!</CardTitle>
        <CardDescription>Your money has been sent.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Amount Sent</span>
          <span className="font-semibold text-lg">{formattedAmount}</span>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Recipient</span>
          <span className="font-medium">{recipient}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Date</span>
          <span className="font-medium">{transactionDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Transaction ID</span>
          <span className="font-mono text-sm text-muted-foreground">
            {`txn_${Date.now()}`}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full" asChild>
          <Link href="/dashboard">Make Another Transfer</Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/history">View History</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
