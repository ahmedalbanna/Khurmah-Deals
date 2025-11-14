import Image from 'next/image';
import {
  Search,
  MapPin,
  Tag,
  ChevronDown,
  LayoutGrid,
  List,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getDeals, getCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DealCard } from '@/components/deal-card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  const deals = getDeals();
  const categories = getCategories();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[400px] md:h-[500px] bg-secondary">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-primary-foreground p-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
              سوقك المحلي للصفقات
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl">
              اكتشف العروض والخصومات الحصرية من المتاجر المحلية في الخرمة.
            </p>
          </div>
        </section>

        <section className="bg-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="bg-card p-4 rounded-lg shadow-md mb-8 -mt-24 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
                <div className="relative md:col-span-2 lg:col-span-2">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="عن ماذا تبحث؟"
                    className="pr-10"
                  />
                </div>
                <div className="relative">
                  <Tag className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Select defaultValue="all" dir='rtl'>
                    <SelectTrigger className="pr-10">
                      <SelectValue placeholder="جميع الفئات" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الفئات</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">بحث</Button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-headline font-semibold">
                أبرز عروض اليوم
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <LayoutGrid className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <List className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {deals.map((deal) => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg">تحميل المزيد من العروض</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
