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
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const registerSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
  accountType: z.enum(['customer', 'store_owner'], {
    required_error: 'You need to select an account type.',
  }),
  storeName: z.string().optional(),
}).refine(data => {
    if (data.accountType === 'store_owner') {
        return data.storeName && data.storeName.length > 0;
    }
    return true;
}, {
    message: "Store name is required for store owners.",
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
            title: "Account Created!",
            description: "You have successfully signed up. Please log in.",
        })
        router.push('/login');
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          {mode === 'register' && (
            <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Your Name"
                type="text"
                autoCapitalize="words"
                autoCorrect="off"
                disabled={isLoading}
                {...register('fullName')}
              />
              {errors.fullName && <p className="text-sm text-destructive">{(errors.fullName as any).message}</p>}
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email')}
            />
            {errors.email && <p className="text-sm text-destructive">{(errors.email as any).message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              disabled={isLoading}
              {...register('password')}
            />
            {errors.password && <p className="text-sm text-destructive">{(errors.password as any).message}</p>}
          </div>
          {mode === 'register' && (
            <>
              <div className="grid gap-2">
                <Label>Account Type</Label>
                <RadioGroup
                  defaultValue="customer"
                  className="flex gap-4"
                  {...register('accountType')}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="customer" id="r1" />
                    <Label htmlFor="r1">Customer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="store_owner" id="r2" />
                    <Label htmlFor="r2">Store Owner</Label>
                  </div>
                </RadioGroup>
                {errors.accountType && <p className="text-sm text-destructive">{(errors.accountType as any).message}</p>}
              </div>
              {accountType === 'store_owner' && (
                 <div className="grid gap-2">
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input
                        id="storeName"
                        placeholder="My Awesome Store"
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
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </div>
      </form>
    </div>
  );
}
