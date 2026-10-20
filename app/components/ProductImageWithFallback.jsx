import {Image} from '@shopify/hydrogen';
import plantPlaceholder from '~/assets/plant-placeholder.jpeg';

/**
 * Renders a product image, or the plant placeholder when the product has none.
 * Accepts any other props supported by Hydrogen's `Image` (width, sizes, etc).
 * @param {{
 *   image?: import('@shopify/hydrogen/storefront-api-types').Image | null;
 *   alt: string;
 * } & Omit<React.ComponentProps<typeof Image>, 'data' | 'src' | 'alt'>}
 */
export function ProductImageWithFallback({image, alt, ...props}) {
  return image ? (
    <Image alt={alt} data={image} {...props} />
  ) : (
    <Image alt={alt} src={plantPlaceholder} {...props} />
  );
}
