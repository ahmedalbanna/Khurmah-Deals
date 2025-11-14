import Link from 'next/link';
import { Package, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Package className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">Overly</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your local marketplace for the best deals in Al Khurmah.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary text-sm">Home</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Businesses</h3>
            <ul className="space-y-2">
              <li><Link href="/dashboard/store" className="text-muted-foreground hover:text-primary text-sm">Post an Ad</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Business Login</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Overly (أوفرلي). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
