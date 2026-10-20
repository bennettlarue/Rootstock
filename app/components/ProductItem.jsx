import {Link} from 'react-router';
import {Money} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {ProductImageWithFallback} from '~/components/ProductImageWithFallback';

/**
 * @param {{
 *   product:
 *     | CollectionItemFragment
 *     | ProductItemFragment
 *     | RecommendedProductFragment;
 *   loading?: 'eager' | 'lazy';
 * }}
 */
export function ProductItem({product, loading}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  return (
    <Link
      className="product-item"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      <ProductImageWithFallback
        alt={image?.altText || product.title}
        aspectRatio="1/1"
        image={image}
        loading={loading}
        sizes="(min-width: 45em) 400px, 100vw"
      />
      <h4>{product.title}</h4>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
    </Link>
  );
}

/** @typedef {import('storefrontapi.generated').ProductItemFragment} ProductItemFragment */
/** @typedef {import('storefrontapi.generated').CollectionItemFragment} CollectionItemFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductFragment} RecommendedProductFragment */
