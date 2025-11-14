'use client';

import { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { generateAdCopy } from '@/ai/ai-ad-suggester';

export function AiAdSuggester() {
  const [idea, setIdea] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!idea.trim()) {
      toast({
        variant: 'destructive',
        title: 'الإدخال مطلوب',
        description: 'الرجاء إدخال فكرة منتج أو صفقة.',
      });
      return;
    }
    setIsLoading(true);
    setSuggestion('');
    try {
      const result = await generateAdCopy({ productDescription: idea });
      setSuggestion(result.adCopy);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'خطأ',
        description: 'فشل في إنشاء الاقتراح. الرجاء معاودة المحاولة.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (!suggestion) return;
    navigator.clipboard.writeText(suggestion);
    toast({
        title: 'تم النسخ!',
        description: 'تم نسخ اقتراح الإعلان إلى الحافظة.'
    })
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          <CardTitle>مقترح إعلانات الذكاء الاصطناعي</CardTitle>
        </div>
        <CardDescription>
          اصنع نسخة الإعلان المثالية. فقط أدخل فكرة أساسية.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="idea">فكرة المنتج أو الصفقة</Label>
          <Textarea
            id="idea"
            placeholder="مثال: خبز طازج، غسيل سيارات في عطلة نهاية الأسبوع"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
        </div>
        <Button onClick={handleGenerate} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          إنشاء اقتراح
        </Button>
        {suggestion && (
          <div className="grid gap-2 relative rounded-md border bg-muted/50 p-4">
            <Label>الاقتراح</Label>
            <p className="text-sm text-foreground">{suggestion}</p>
             <Button onClick={handleCopyToClipboard} variant="outline" size="sm" className="mt-2 w-fit">نسخ النص</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
