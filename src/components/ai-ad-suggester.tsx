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

export function AiAdSuggester() {
  const [idea, setIdea] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!idea.trim()) {
      toast({
        variant: 'destructive',
        title: 'Input required',
        description: 'Please enter a product or deal idea.',
      });
      return;
    }
    setIsLoading(true);
    setSuggestion('');
    try {
      // Mock AI call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const generatedText = `🔥 Unbeatable Deal! 🔥 Get the best ${idea} in town, now with an exclusive discount! Perfect for [target audience], our ${idea} offers [key benefit 1] and [key benefit 2]. Limited time offer, visit us today at [Your Store Name] and don't miss out! #KhurmahDeals #${idea.split(' ')[0]}`;
      setSuggestion(generatedText);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate suggestion. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (!suggestion) return;
    navigator.clipboard.writeText(suggestion);
    toast({
        title: 'Copied!',
        description: 'Ad suggestion copied to clipboard.'
    })
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          <CardTitle>AI Ad Suggester</CardTitle>
        </div>
        <CardDescription>
          Craft the perfect ad copy. Just enter a basic idea.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="idea">Product or Deal Idea</Label>
          <Textarea
            id="idea"
            placeholder="e.g., fresh bread, weekend car wash"
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
          Generate Suggestion
        </Button>
        {suggestion && (
          <div className="grid gap-2 relative rounded-md border bg-muted/50 p-4">
            <Label>Suggestion</Label>
            <p className="text-sm text-foreground">{suggestion}</p>
             <Button onClick={handleCopyToClipboard} variant="outline" size="sm" className="mt-2 w-fit">Copy Text</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
