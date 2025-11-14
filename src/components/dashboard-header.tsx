'use client';

import Link from 'next/link';
import {
  Search,
  ChevronLeft,
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

const pathTranslations: { [key: string]: string } = {
    dashboard: 'لوحة التحكم',
    admin: 'المشرف',
    review: 'المراجعة',
    users: 'المستخدمون',
    categories: 'الفئات',
    store: 'المتجر',
    ads: 'الإعلانات',
    new: 'جديد',
    messages: 'الرسائل',
};

export function DashboardHeader() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30 md:peer-data-[variant=inset]:top-2 md:peer-data-[variant=inset]:mx-2 md:peer-data-[variant=inset]:rounded-t-xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/dashboard" className="text-foreground">لوحة التحكم</Link>
        {pathSegments.slice(1).map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 2).join('/')}`;
            const isLast = index === pathSegments.length - 2;
            const translatedSegment = pathTranslations[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
            return (
                 <span key={segment} className="flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    <Link href={href} className={isLast ? "font-medium text-foreground" : ""}>
                        {translatedSegment}
                    </Link>
                 </span>
            )
        })}
      </div>

      <div className="mr-auto flex items-center gap-4">
        <form className="relative hidden md:block">
          <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="بحث..."
            className="pr-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-background"
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
            <DropdownMenuLabel>حسابي</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>الإعدادات</DropdownMenuItem>
            <DropdownMenuItem>الدعم</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link href="/">تسجيل الخروج</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <SidebarTrigger className="md:hidden" />
    </header>
  );
}
