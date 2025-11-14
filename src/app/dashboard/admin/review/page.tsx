import Image from 'next/image';
import { getAllDealsForAdmin } from '@/lib/data';
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
import { Check, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function AdReviewPage() {
  const allDeals = getAllDealsForAdmin();
  const pendingDeals = allDeals.filter((deal) => deal.status === 'pending');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ad Review</CardTitle>
        <CardDescription>
          Review and approve or reject ads submitted by store owners.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Store</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingDeals.map((deal) => {
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
                  <TableCell>{deal.storeName}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {deal.price}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 bg-green-500/10 text-green-600 hover:bg-green-500/20 hover:text-green-700">
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 bg-red-500/10 text-red-600 hover:bg-red-500/20 hover:text-red-700">
                        <X className="h-4 w-4" />
                         <span className="sr-only">Reject</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
             {pendingDeals.length === 0 && (
                <TableRow>
                    <TableCell colSpan={5} className="text-center">
                        No pending ads to review.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
