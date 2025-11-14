import Link from 'next/link';
import { Package, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navLinks = [
  { href: '/', label: 'Deals' },
  { href: '/dashboard/store', label: 'For Business' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const isLoggedIn = false; // Mock state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Overly</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <Button asChild>
                <Link href="/login">Login / Sign Up</Link>
              </Button>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Overly</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                 {isLoggedIn ? (
                   <div className="mt-4">
                      <UserMenu />
                   </div>
                 
                ) : (
                  <Button asChild className="mt-4">
                    <Link href="/login">Login / Sign Up</Link>
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const UserMenu = () => (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <Avatar>
          <AvatarImage src="https://picsum.photos/seed/user/32/32" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href="/dashboard/store">Dashboard</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="#">Settings</Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)
