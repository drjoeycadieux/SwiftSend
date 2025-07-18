import AppLayout from '@/components/app-layout';
import TransferForm from '@/components/dashboard/transfer-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
            <CardHeader>
                <CardTitle className="font-headline">New Transfer</CardTitle>
                <CardDescription>Send money to anyone, anytime.</CardDescription>
            </CardHeader>
            <CardContent>
                <TransferForm />
            </CardContent>
        </Card>
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle className="font-headline">Quick Guide</CardTitle>
                <CardDescription>How to send money in 3 easy steps.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm">
                <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                    <div>
                        <h3 className="font-semibold">Enter Details</h3>
                        <p className="text-muted-foreground">Fill in the recipient's email and the amount you want to send.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                    <div>
                        <h3 className="font-semibold">Add an Emoji (Optional)</h3>
                        <p className="text-muted-foreground">Our AI will suggest an emoji based on the amount. Feel free to use it!</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                    <div>
                        <h3 className="font-semibold">Confirm & Send</h3>
                        <p className="text-muted-foreground">Review and hit 'Send Money'. Your transfer will be processed instantly.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
