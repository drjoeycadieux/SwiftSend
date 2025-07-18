'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';

const transferSchema = z.object({
  recipient: z.string().email(),
  amount: z.coerce.number().positive(),
  message: z.string().optional(),
});

type TransferData = z.infer<typeof transferSchema>;

export async function processTransfer(data: TransferData) {
  const validatedData = transferSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: 'Invalid data provided.' };
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate a potential failure
  if (Math.random() < 0.2) { // 20% chance of failure
    return { error: 'Payment gateway declined the transaction. Please try again.' };
  }

  const { amount, recipient } = validatedData.data;
  const urlParams = new URLSearchParams({
    amount: amount.toString(),
    recipient: recipient,
  });

  redirect(`/transfer/confirmation?${urlParams.toString()}`);
}
