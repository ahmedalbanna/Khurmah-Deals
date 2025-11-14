'use client';

import Link from 'next/link';
import {
  Search,
  ChevronRight,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function DashboardHeader() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30 md:peer-data-[variant=inset]:top-2 md:peer-data-[variant=inset]:mx-2 md:peer-data-[variant=inset]:rounded-t-xl">
      <SidebarTrigger className="md:hidden" />

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/dashboard" className="text-foreground">Dashboard</Link>
        {pathSegments.slice(1).map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 2).join('/')}`;
            const isLast = index === pathSegments.length - 2;
            return (
                 <span key={segment} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4" />
                    <Link href={href} className={isLast ? "font-medium text-foreground" : ""}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </Link>
                 </span>
            )
        })}
      </div>

      <div className="ml-auto flex items-center gap-4">
        <form className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-background"
          />
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="https://picsum.photos/seed/admin/32/32" alt="Admin" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link href="/">Logout</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
