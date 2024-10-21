import PrimaryButton from "@/components/shared/PrimaryButton";
import { Product } from "../_types/product";

interface ProductProp {
  product: Product;
}

const ProductDetail = ({ product }: ProductProp) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4 lg:flex lg:items-start lg:gap-12">
        {/* Product Image */}
        <div className="lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product?.image}
            alt={product?.title}
            className="rounded-lg shadow-lg object-cover w-full h-[500px]"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-900">{product?.title}</h2>
          <p className="mt-4 text-xl text-fuchsia-800 font-semibold">
            ${product?.price.toFixed(2)}
          </p>

          <p className="mt-4 text-gray-700">{product?.description}</p>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <PrimaryButton>Add to Cart</PrimaryButton>
            <PrimaryButton variant="outline">Buy Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
