'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  mode: 'login' | 'register';
}

const loginSchema = z.object({
  email: z.string().email({ message: 'الرجاء إدخال عنوان بريد إلكتروني صالح.' }),
  password: z.string().min(1, { message: 'كلمة المرور مطلوبة.' }),
});

const registerSchema = z.object({
  fullName: z.string().min(3, { message: 'يجب أن يتكون الاسم الكامل من 3 أحرف على الأقل.' }),
  email: z.string().email({ message: 'الرجاء إدخال عنوان بريد إلكتروني صالح.' }),
  password: z.string().min(8, { message: 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.' }),
  accountType: z.enum(['customer', 'store_owner'], {
    required_error: 'يجب عليك تحديد نوع الحساب.',
  }),
  storeName: z.string().optional(),
}).refine(data => {
    if (data.accountType === 'store_owner') {
        return data.storeName && data.storeName.length > 0;
    }
    return true;
}, {
    message: "اسم المتجر مطلوب لأصحاب المتاجر.",
    path: ["storeName"],
});

type FormData = z.infer<typeof loginSchema> | z.infer<typeof registerSchema>;

export function UserAuthForm({ className, mode, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  
  const schema = mode === 'login' ? loginSchema : registerSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  
  const accountType = watch('accountType' as any);

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);

    if (mode === 'login') {
        const { email } = data as z.infer<typeof loginSchema>;
        if(email.startsWith('admin')) {
             router.push('/dashboard/admin');
        } else {
             router.push('/dashboard/store');
        }
    } else {
        toast({
            title: "تم إنشاء الحساب!",
            description: "لقد قمت بالتسجيل بنجاح. الرجاء تسجيل الدخول.",
        })
        router.push('/login');
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          {mode === 'register' && (
            <div className="grid gap-2 text-right">
              <Label htmlFor="fullName">الاسم الكامل</Label>
              <Input
                id="fullName"
                placeholder="اسمك"
                type="text"
                autoCapitalize="words"
                autoCorrect="off"
                disabled={isLoading}
                {...register('fullName')}
              />
              {errors.fullName && <p className="text-sm text-destructive">{(errors.fullName as any).message}</p>}
            </div>
          )}
          <div className="grid gap-2 text-right">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              dir="ltr"
              {...register('email')}
            />
            {errors.email && <p className="text-sm text-destructive">{(errors.email as any).message}</p>}
          </div>
          <div className="grid gap-2 text-right">
            <Label htmlFor="password">كلمة المرور</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              disabled={isLoading}
              dir="ltr"
              {...register('password')}
            />
            {errors.password && <p className="text-sm text-destructive">{(errors.password as any).message}</p>}
          </div>
          {mode === 'register' && (
            <>
              <div className="grid gap-2 text-right">
                <Label>نوع الحساب</Label>
                <RadioGroup
                  defaultValue="customer"
                  className="flex gap-4"
                  dir="rtl"
                  onValueChange={(value) => setValue('accountType', value as 'customer' | 'store_owner')}
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="customer" id="r1" />
                    <Label htmlFor="r1">زبون</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="store_owner" id="r2" />
                    <Label htmlFor="r2">صاحب متجر</Label>
                  </div>
                </RadioGroup>
                {errors.accountType && <p className="text-sm text-destructive">{(errors.accountType as any).message}</p>}
              </div>
              {accountType === 'store_owner' && (
                 <div className="grid gap-2 text-right">
                    <Label htmlFor="storeName">اسم المتجر</Label>
                    <Input
                        id="storeName"
                        placeholder="متجري الرائع"
                        type="text"
                        disabled={isLoading}
                        {...register('storeName')}
                    />
                    {errors.storeName && <p className="text-sm text-destructive">{(errors.storeName as any).message}</p>}
                </div>
              )}
            </>
          )}

          <Button disabled={isLoading} className="mt-2">
            {isLoading && (
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            )}
            {mode === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب'}
          </Button>
        </div>
      </form>
    </div>
  );
}
