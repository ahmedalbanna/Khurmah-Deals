'use client';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Package,
  Home,
  Users,
  Tag,
  CheckCheck,
  Store,
  PlusCircle,
  MessageSquare,
  BarChart2,
  Settings,
  LogOut,
} from 'lucide-react';
import { DashboardHeader } from '@/components/dashboard-header';

const adminNav = [
  { href: '/dashboard/admin', label: 'نظرة عامة', icon: Home },
  { href: '/dashboard/admin/review', label: 'مراجعة الإعلانات', icon: CheckCheck },
  { href: '/dashboard/admin/users', label: 'إدارة المستخدمين', icon: Users },
  { href: '/dashboard/admin/categories', label: 'إدارة الفئات', icon: Tag },
];

const storeNav = [
  { href: '/dashboard/store', label: 'نظرة عامة', icon: Home },
  { href: '/dashboard/store/ads', label: 'إدارة الإعلانات', icon: Store },
  { href: '/dashboard/store/ads/new', label: 'إضافة إعلان جديد', icon: PlusCircle },
  { href: '/dashboard/store/messages', label: 'الرسائل', icon: MessageSquare },
  { href: '#', label: 'الأداء', icon: BarChart2 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStore = pathname.startsWith('/dashboard/store');
  const navItems = isStore ? storeNav : adminNav;

  return (
    <SidebarProvider>
      <Sidebar side="right">
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline text-lg group-data-[collapsible=icon]:hidden">
              خرمة ديلز
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={{ children: item.label }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={{children: 'الإعدادات'}}>
                <Settings />
                <span>الإعدادات</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{children: 'تسجيل الخروج'}}>
                <Link href="/">
                    <LogOut />
                    <span>تسجيل الخروج</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
