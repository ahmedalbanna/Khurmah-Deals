import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CreditCard, Lock } from 'lucide-react';

export default function PaymentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>أكمل عملية الدفع</CardTitle>
              <CardDescription>
                ادفع بأمان لإرسال إعلانك.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="p-4 rounded-lg bg-secondary/50 border border-secondary">
                 <div className="flex justify-between items-center">
                    <span className="font-medium">نشر إعلان قياسي</span>
                    <span className="font-bold">25.00 ريال</span>
                 </div>
                 <p className="text-sm text-muted-foreground mt-1">صالح لمدة 30 يومًا</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="card-number">رقم البطاقة</Label>
                <div className="relative">
                  <Input id="card-number" placeholder="0000 0000 0000 0000" dir="ltr" />
                  <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry-date">انتهاء الصلاحية</Label>
                  <Input id="expiry-date" placeholder="MM/YY" dir="ltr" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" dir="ltr" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="zip">الرمز البريدي</Label>
                  <Input id="zip" placeholder="12345" dir="ltr" />
                </div>
              </div>
              <div className="grid gap-2">
                  <Label htmlFor="name">الاسم على البطاقة</Label>
                  <Input id="name" placeholder="فلان الفلاني" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full" size="lg">
                <Lock className="mr-2 h-4 w-4" />
                ادفع 25.00 ريال
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                دفعك آمن ومشفّر.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
