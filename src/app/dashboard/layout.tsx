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
  { href: '/dashboard/admin', label: 'Overview', icon: Home },
  { href: '/dashboard/admin/review', label: 'Ad Review', icon: CheckCheck },
  { href: '/dashboard/admin/users', label: 'Manage Users', icon: Users },
  { href: '/dashboard/admin/categories', label: 'Manage Categories', icon: Tag },
];

const storeNav = [
  { href: '/dashboard/store', label: 'Overview', icon: Home },
  { href: '/dashboard/store/ads', label: 'Manage Ads', icon: Store },
  { href: '/dashboard/store/ads/new', label: 'Add New Ad', icon: PlusCircle },
  { href: '/dashboard/store/messages', label: 'Messages', icon: MessageSquare },
  { href: '#', label: 'Performance', icon: BarChart2 },
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
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg group-data-[collapsible=icon]:hidden">
              Overly
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
              <SidebarMenuButton tooltip={{children: 'Settings'}}>
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={{children: 'Logout'}}>
                <Link href="/">
                    <LogOut />
                    <span>Logout</span>
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
