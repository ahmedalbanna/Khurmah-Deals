import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDealById, getDeals } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, MapPin, Phone, ShoppingBag } from 'lucide-react';
import { DealCard } from '@/components/deal-card';

export default function DealDetailsPage({ params }: { params: { id: string } }) {
  const deal = getDealById(params.id);
  const relatedDeals = getDeals().filter(d => d.id !== params.id).slice(0, 4);

  if (!deal) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === 'deal-detail');
  const storeImage = PlaceHolderImages.find((img) => img.id === 'user-avatar-2');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={deal.title}
                    data-ai-hint={image.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              {/* Add carousel for multiple images here if needed */}
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">{deal.category}</Badge>
              <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2">{deal.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                 <p className="text-3xl font-bold text-primary">{deal.price}</p>
                 <Badge variant="destructive" className="text-lg">{deal.discount}</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">{deal.description}</p>
              
              <Separator className="my-6" />

              <div className="flex items-start space-x-4 mb-6">
                <div className="relative h-16 w-16 flex-shrink-0">
                    {storeImage && <Image src={storeImage.imageUrl} alt={deal.storeName} data-ai-hint={storeImage.imageHint} fill className="rounded-full object-cover" />}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{deal.storeName}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>الخرمة، الشارع العام</span>
                  </div>
                   <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <Phone className="h-4 w-4" />
                    <span>+966 12 345 6789</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1"><ShoppingBag className="mr-2 h-5 w-5" /> الحصول على العرض</Button>
                <Button size="lg" variant="outline" className="flex-1">اتصل بالمتجر</Button>
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-secondary/50 py-12">
            <div className="container mx-auto px-4">
                 <h2 className="text-2xl md:text-3xl font-headline font-semibold mb-6">
                    عروض ذات صلة
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedDeals.map((relatedDeal) => (
                        <DealCard key={relatedDeal.id} deal={relatedDeal} />
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
