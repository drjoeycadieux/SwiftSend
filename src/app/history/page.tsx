import AppLayout from '@/components/app-layout';
import HistoryTable from '@/components/history/history-table';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function HistoryPage() {
  return (
    <AppLayout>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Transaction History</CardTitle>
          <CardDescription>A record of your recent sent and received payments.</CardDescription>
        </CardHeader>
        <CardContent>
          <HistoryTable />
        </CardContent>
      </Card>
    </AppLayout>
  );
}
