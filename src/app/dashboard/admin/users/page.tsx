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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Users</CardTitle>
        <CardDescription>
          A list of all users in the system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Avatar</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">
                Created at
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
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
                    <Badge variant={roleVariant[user.role]}>{user.role.replace('_', ' ')}</Badge>
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
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
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
