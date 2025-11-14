import Link from 'next/link';
import { Package } from 'lucide-react';
import { UserAuthForm } from '@/components/user-auth-form';

export default function LoginPage() {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
            <Link href="/" className="flex items-center justify-center gap-2 mb-4">
                <Package className="h-8 w-8 text-primary" />
                <span className="font-bold font-headline text-2xl">أوفرلي</span>
            </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            مرحباً بعودتك
          </h1>
          <p className="text-sm text-muted-foreground">
            أدخل بريدك الإلكتروني وكلمة المرور لتسجيل الدخول إلى حسابك
          </p>
        </div>
        <UserAuthForm mode="login" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="underline underline-offset-4 hover:text-primary"
          >
            ليس لديك حساب؟ سجل الآن
          </Link>
        </p>
      </div>
    </div>
  );
}
