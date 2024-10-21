import ProductList from "./ProductList";

const ProductPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold">Products</h1>
      <p className="text-gray-600 mt-2">
        Explore our wide range of products and services.
      </p>

      <ProductList />
    </div>
  );
};
export default ProductPage;
