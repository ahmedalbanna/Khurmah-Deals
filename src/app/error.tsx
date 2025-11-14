'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-4">
      <Frown className="w-16 h-16 text-destructive mb-4" />
      <h2 className="text-3xl font-bold font-headline mb-2">عفواً، حدث خطأ ما!</h2>
      <p className="text-muted-foreground mb-6 max-w-md">حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى، أو إذا استمرت المشكلة، اتصل بالدعم.</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        حاول مرة أخرى
      </Button>
    </div>
  );
}
