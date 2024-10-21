import ProductCard from "./_components/ProductCard";
import { Product } from "./_types/product";

const products: Product[] = [
  // car components
  {
    title: "Brake Pads",
    price: 50,
    description: "High quality brake pads for your car.",
    image:
      "https://cdn11.bigcommerce.com/s-svnjf7qbac/images/stencil/1280x1280/products/3522/21751/z1003101_001__03522.1664483899.jpg?c=2",
  },
  {
    title: "Air Filter",
    price: 20,
    description: "High quality air filter for your car.",
    image:
      "https://cdn11.bigcommerce.com/s-svnjf7qbac/images/stencil/1280x1280/products/3522/21751/z1003101_001__03522.1664483899.jpg?c=2",
  },
  {
    title: "Oil Filter",
    price: 10,
    description: "High quality oil filter for your car.",
    image:
      "https://cdn11.bigcommerce.com/s-svnjf7qbac/images/stencil/1280x1280/products/3522/21751/z1003101_001__03522.1664483899.jpg?c=2",
  },
  {
    title: "Spark Plugs",
    price: 15,
    description: "High quality spark plugs for your car.",
    image:
      "https://cdn11.bigcommerce.com/s-svnjf7qbac/images/stencil/1280x1280/products/3522/21751/z1003101_001__03522.1664483899.jpg?c=2",
  },
];

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
