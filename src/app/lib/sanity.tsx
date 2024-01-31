import {createClient} from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-30',
  perspective: 'published',
  useCdn: false,
});
const ImageBuilder = ImageUrlBuilder(client);
export function urlFor(source: any) {
  return ImageBuilder.image(source);
}
