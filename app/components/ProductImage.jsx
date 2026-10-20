import {ProductImageWithFallback} from './ProductImageWithFallback';

/**
 * @param {{
 *   image: ProductVariantFragment['image'];
 * }}
 */
export function ProductImage({image}) {
  return (
    <div className="product-image">
      <ProductImageWithFallback
        alt={image?.altText || 'Product Image'}
        aspectRatio="1/1"
        image={image}
        key={image?.id}
        sizes="(min-width: 45em) 50vw, 100vw"
      />
    </div>
  );
}

/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */
