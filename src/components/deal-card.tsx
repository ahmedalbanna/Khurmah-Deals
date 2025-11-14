import Image from 'next/image';
import Link from 'next/link';
import type { Deal } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type DealCardProps = {
  deal: Deal;
};

export function DealCard({ deal }: DealCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === deal.imageId);

  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/deals/${deal.id}`} className="block">
          <div className="relative h-48 w-full">
            {image && (
              <Image
                src={image.imageUrl}
                alt={deal.title}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
              />
            )}
            <Badge
              variant="secondary"
              className="absolute top-2 right-2 bg-primary/80 text-primary-foreground backdrop-blur-sm"
            >
              {deal.discount}
            </Badge>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-1 flex flex-col">
        <Badge variant="outline" className="w-fit mb-2">
          {deal.category}
        </Badge>
        <h3 className="font-headline font-semibold text-lg flex-1">
          <Link href={`/deals/${deal.id}`}>{deal.title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{deal.storeName}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-xl font-bold text-primary">{deal.price}</p>
        <Button asChild variant="outline">
          <Link href={`/deals/${deal.id}`}>View Deal</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
