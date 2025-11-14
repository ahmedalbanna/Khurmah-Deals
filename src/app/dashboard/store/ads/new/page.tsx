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
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { getCategories } from '@/lib/data';
import { AiAdSuggester } from '@/components/ai-ad-suggester';

export default function AddNewAdPage() {
  const categories = getCategories();

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>إنشاء إعلان جديد</CardTitle>
              <CardDescription>
                املأ تفاصيل صفقتك الجديدة أدناه.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">عنوان الإعلان</Label>
                <Input id="title" placeholder="مثال: خصم 50% على جميع القمصان" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">الوصف</Label>
                <Textarea
                  id="description"
                  placeholder="صف صفقتك بالتفصيل."
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">السعر (بعد الخصم)</Label>
                  <Input id="price" placeholder="مثال: 50 ريال" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="discount">الخصم</Label>
                  <Input id="discount" placeholder="مثال: 50% خصم" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">الفئة</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="اختر فئة" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">تحميل صورة</Label>
                  <Input id="image" type="file" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="outline">حفظ كمسودة</Button>
              <Button>إرسال للمراجعة</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <AiAdSuggester />
        </div>
      </div>
    </div>
  );
}
