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

  const statusTranslations = {
    approved: 'مقبول',
    pending: 'قيد المراجعة',
    rejected: 'مرفوض',
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle>إدارة الإعلانات</CardTitle>
                <CardDescription>
                قائمة بجميع الإعلانات التي قمت بإنشائها.
                </CardDescription>
            </div>
            <Button asChild>
                <Link href="/dashboard/store/ads/new">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    إضافة إعلان جديد
                </Link>
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">صورة</span>
              </TableHead>
              <TableHead>العنوان</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead className="hidden md:table-cell">السعر</TableHead>
              <TableHead className="hidden md:table-cell">
                تاريخ الإنشاء
              </TableHead>
              <TableHead>
                <span className="sr-only">الإجراءات</span>
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
                      {statusTranslations[deal.status]}
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
                          <span className="sr-only">فتح القائمة</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                        <DropdownMenuItem>تعديل</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          حذف
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
