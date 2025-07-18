import { Suspense } from 'react';
import ConfirmationCard from '@/components/transfer/confirmation-card';

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-muted/40">
      <Suspense fallback={<div className="text-lg">Loading confirmation...</div>}>
        <ConfirmationCard />
      </Suspense>
    </div>
  );
}
