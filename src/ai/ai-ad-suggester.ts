// This file is a Genkit flow that generates compelling ad copy for store owners.

'use server';

/**
 * @fileOverview An AI agent to suggest ad copy for store owners.
 *
 * - generateAdCopy - A function that generates ad copy based on a product description.
 * - GenerateAdCopyInput - The input type for the generateAdCopy function.
 * - GenerateAdCopyOutput - The return type for the generateAdCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdCopyInputSchema = z.object({
  productDescription: z.string().describe('A description of the product or service being advertised.'),
});
export type GenerateAdCopyInput = z.infer<typeof GenerateAdCopyInputSchema>;

const GenerateAdCopyOutputSchema = z.object({
  adCopy: z.string().describe('The generated ad copy.'),
});
export type GenerateAdCopyOutput = z.infer<typeof GenerateAdCopyOutputSchema>;

export async function generateAdCopy(input: GenerateAdCopyInput): Promise<GenerateAdCopyOutput> {
  return generateAdCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAdCopyPrompt',
  input: {schema: GenerateAdCopyInputSchema},
  output: {schema: GenerateAdCopyOutputSchema},
  prompt: `You are an expert marketing copywriter. Please generate compelling ad copy for the following product or service description:

{{{productDescription}}}

Ad Copy:`,
});

const generateAdCopyFlow = ai.defineFlow(
  {
    name: 'generateAdCopyFlow',
    inputSchema: GenerateAdCopyInputSchema,
    outputSchema: GenerateAdCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
