import Link from 'next/link';
import { Package } from 'lucide-react';
import { UserAuthForm } from '@/components/user-auth-form';

export default function RegisterPage() {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
            <Link href="/" className="flex items-center justify-center gap-2 mb-4">
                <Package className="h-8 w-8 text-accent" />
                <span className="font-bold font-headline text-2xl">خرمة ديلز</span>
            </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            إنشاء حساب
          </h1>
          <p className="text-sm text-muted-foreground">
            أدخل التفاصيل الخاصة بك أدناه لإنشاء حسابك
          </p>
        </div>
        <UserAuthForm mode="register" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          بالنقر على "متابعة"، فإنك توافق على{' '}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            شروط الخدمة
          </Link>{' '}
          و{' '}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            سياسة الخصوصية
          </Link>
          .
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            هل لديك حساب بالفعل؟ تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
