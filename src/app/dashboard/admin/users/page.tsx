import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';
import { format } from 'date-fns';

import { getUsers } from '@/lib/data';
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

export default function ManageUsersPage() {
  const users = getUsers();

  const roleVariant = {
      admin: 'destructive',
      store_owner: 'default',
      customer: 'secondary'
  } as const;

  const roleTranslations = {
    admin: 'مشرف',
    store_owner: 'صاحب متجر',
    customer: 'عميل'
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>إدارة المستخدمين</CardTitle>
        <CardDescription>
          قائمة بجميع المستخدمين في النظام.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">الصورة الرمزية</span>
              </TableHead>
              <TableHead>الاسم</TableHead>
              <TableHead>الدور</TableHead>
              <TableHead className="hidden md:table-cell">البريد الإلكتروني</TableHead>
              <TableHead className="hidden md:table-cell">
                تاريخ الإنشاء
              </TableHead>
              <TableHead>
                <span className="sr-only">الإجراءات</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              const avatar = PlaceHolderImages.find(
                (img) => img.id === user.avatarId
              );
              return (
                <TableRow key={user.id}>
                  <TableCell className="hidden sm:table-cell">
                    {avatar && (
                      <Image
                        alt={user.name}
                        className="aspect-square rounded-full object-cover"
                        height="40"
                        src={avatar.imageUrl}
                        width="40"
                        data-ai-hint={avatar.imageHint}
                      />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>
                    <Badge variant={roleVariant[user.role]}>{roleTranslations[user.role]}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {user.email}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {format(user.createdAt, 'PPP')}
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
                        <DropdownMenuItem className="text-destructive">حذف</DropdownMenuItem>
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
