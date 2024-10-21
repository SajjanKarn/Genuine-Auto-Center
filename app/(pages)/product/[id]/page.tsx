import { Product } from "../_types/product";
import { products } from "../_data/products.data";
import ProductDetail from "./ProductDetail";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const productId = params.id;
  const product = products.find((p) => p.id === Number(productId)) as Product;

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
