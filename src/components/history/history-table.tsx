import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const transactions = [
  {
    id: 'txn_1',
    type: 'sent',
    party: 'jane.doe@example.com',
    date: '2024-05-20',
    amount: 50.0,
    status: 'Completed',
  },
  {
    id: 'txn_2',
    type: 'received',
    party: 'john.smith@example.com',
    date: '2024-05-18',
    amount: 200.0,
    status: 'Completed',
  },
  {
    id: 'txn_3',
    type: 'sent',
    party: 'alice.jones@example.com',
    date: '2024-05-15',
    amount: 15.75,
    status: 'Completed',
  },
  {
    id: 'txn_4',
    type: 'sent',
    party: 'bob.williams@example.com',
    date: '2024-05-12',
    amount: 300.0,
    status: 'Pending',
  },
    {
    id: 'txn_5',
    type: 'received',
    party: 'service.corp@example.com',
    date: '2024-05-10',
    amount: 850.50,
    status: 'Completed',
  },
  {
    id: 'txn_6',
    type: 'sent',
    party: 'mom@example.com',
    date: '2024-05-01',
    amount: 100.0,
    status: 'Failed',
  },
];

export default function HistoryTable() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
      });
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead>Details</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="hidden sm:table-cell text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((txn) => (
          <TableRow key={txn.id}>
            <TableCell>
              {txn.type === 'sent' ? (
                <div className="flex justify-center items-center h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30">
                  <ArrowUpRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
              ) : (
                <div className="flex justify-center items-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30">
                  <ArrowDownLeft className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
              )}
            </TableCell>
            <TableCell>
              <div className="font-medium">
                {txn.type === 'sent' ? 'Sent to' : 'Received from'}
              </div>
              <div className="text-sm text-muted-foreground">{txn.party}</div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{formatDate(txn.date)}</TableCell>
            <TableCell className={`text-right font-medium ${txn.type === 'sent' ? 'text-red-600' : 'text-green-600'}`}>
              {txn.type === 'sent' ? '-' : '+'}
              {formatCurrency(txn.amount)}
            </TableCell>
            <TableCell className="hidden sm:table-cell text-center">
              <Badge
                variant={
                  txn.status === 'Completed'
                    ? 'default'
                    : txn.status === 'Pending'
                    ? 'secondary'
                    : 'destructive'
                }
                className={
                    txn.status === 'Completed' ? 'bg-green-600/80 hover:bg-green-600' : 
                    txn.status === 'Pending' ? 'bg-yellow-500/80 hover:bg-yellow-500' : ''
                }
              >
                {txn.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
