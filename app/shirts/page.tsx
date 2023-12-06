import ProductsListCommponent from "../components/product-list";
import BasicLayout from "../layouts/basic-layout";

export default function ShirtPage() {
  return (
    <BasicLayout>
      <ProductsListCommponent category="shirt" />
    </BasicLayout>
  );
}
