import Image from 'next/image';
import Link from 'next/link';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { format } from 'date-fns';

import { getDealsByStore } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ManageAdsPage() {
  const deals = getDealsByStore('store-2');

  const statusVariant = {
    approved: 'default',
    pending: 'secondary',
    rejected: 'destructive',
  } as const;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle>Manage Ads</CardTitle>
                <CardDescription>
                A list of all ads you have created.
                </CardDescription>
            </div>
            <Button asChild>
                <Link href="/dashboard/store/ads/new">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Add New Ad
                </Link>
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">
                Created at
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deals.map((deal) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === deal.imageId
              );
              return (
                <TableRow key={deal.id}>
                  <TableCell className="hidden sm:table-cell">
                    {image && (
                      <Image
                        alt={deal.title}
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={image.imageUrl}
                        width="64"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{deal.title}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[deal.status]}>
                      {deal.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {deal.price}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {format(deal.createdAt, 'PPP')}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
