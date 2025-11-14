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
              <span className="font-bold font-headline text-lg">أوفرلي</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              سوقك المحلي لأفضل الصفقات في الخرمة.
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
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary text-sm">الرئيسية</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">من نحن</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">تواصل معنا</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">الأسئلة الشائعة</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">للشركات</h3>
            <ul className="space-y-2">
              <li><Link href="/dashboard/store" className="text-muted-foreground hover:text-primary text-sm">أضف إعلان</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">الأسعار</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">دخول الشركات</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">قانوني</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">سياسة الخصوصية</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm">شروط الخدمة</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} أوفرلي (Overly). جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
