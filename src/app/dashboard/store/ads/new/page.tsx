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
              <CardTitle>Create New Ad</CardTitle>
              <CardDescription>
                Fill in the details of your new deal below.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Ad Title</Label>
                <Input id="title" placeholder="e.g., 50% Off All T-Shirts" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your deal in detail."
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price (after discount)</Label>
                  <Input id="price" placeholder="e.g., SAR 50" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="discount">Discount</Label>
                  <Input id="discount" placeholder="e.g., 50% OFF" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
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
                  <Label htmlFor="image">Upload Image</Label>
                  <Input id="image" type="file" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit for Review</Button>
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
