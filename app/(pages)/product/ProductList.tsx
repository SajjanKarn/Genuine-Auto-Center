import ProductCard from "./_components/ProductCard";
import { products } from "./_data/products.data";

const ProductList = () => {
  return (
    <>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
