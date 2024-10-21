import Link from "next/link";
import { Product } from "../_types/product";

interface ProductProp {
  product: Product;
}

const ProductCard = ({ product }: ProductProp) => {
  return (
    <Link href={`/product/${product.id}`} key={product.title}>
      <div className="p-3 border shadow-sm hover:shadow-md transition-shadow group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover group-hover:scale-110 transition-transform"
        />
        <h3 className="text-2xl font-semibold mt-2">{product.title}</h3>
        <p className="text-lg text-gray-600 mt-1">${product.price}</p>
        <p className="text-gray-500 mt-1">{product.description}</p>
      </div>
    </Link>
  );
};
export default ProductCard;
