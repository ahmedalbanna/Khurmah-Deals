import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Eye,
  MessageSquare,
  BarChart,
  Activity,
  PlusCircle,
  MoreHorizontal
} from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { Button } from '@/components/ui/button';
import { getDealsByStore } from '@/lib/data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const chartData = [
  { month: 'January', views: 1860 },
  { month: 'February', views: 3050 },
  { month: 'March', views: 2370 },
  { month: 'April', views: 730 },
  { month: 'May', views: 2090 },
  { month: 'June', views: 2140 },
];

const chartConfig = {
  views: {
    label: 'Views',
    color: 'hsl(var(--primary))',
  },
};

export default function StoreDashboard() {
    const recentDeals = getDealsByStore('store-2').slice(0, 5);

    const statusVariant = {
        approved: 'default',
        pending: 'secondary',
        rejected: 'destructive'
    } as const;

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Ad Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23</div>
            <p className="text-xs text-muted-foreground">
              +5 unread
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Ads</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              out of 10 available
            </p>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground">
            <CardHeader className="pb-2">
                <CardTitle>Create a New Ad</CardTitle>
                <CardDescription className="text-primary-foreground/80">Get more customers by posting a new deal.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="secondary" asChild>
                    <Link href="/dashboard/store/ads/new">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add New Ad
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ad Views Overview</CardTitle>
          <CardDescription>
            An overview of your ad views in the last 6 months.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <AreaChart data={chartData}>
               <defs>
                <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-views)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-views)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(v) => v.slice(0,3)} />
              <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
              <Area dataKey="views" type="natural" fill="url(#fillViews)" stroke="var(--color-views)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Recent Ads</CardTitle>
            <CardDescription>A list of your most recent ads.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">Price</TableHead>
                        <TableHead className="hidden md:table-cell">Created At</TableHead>
                        <TableHead><span className="sr-only">Actions</span></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {recentDeals.map(deal => (
                         <TableRow key={deal.id}>
                            <TableCell className="font-medium">{deal.title}</TableCell>
                            <TableCell><Badge variant={statusVariant[deal.status]}>{deal.status}</Badge></TableCell>
                            <TableCell className="hidden md:table-cell">{deal.price}</TableCell>
                            <TableCell className="hidden md:table-cell">{deal.createdAt.toLocaleDateString()}</TableCell>
                            <TableCell>
                                <Button size="sm" variant="outline">View</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
