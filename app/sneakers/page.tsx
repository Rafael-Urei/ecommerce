import ProductsListCommponent from "../components/product-list";
import BasicLayout from "../layouts/basic-layout";

export default function SneakersPage() {
  return (
    <BasicLayout>
      <ProductsListCommponent category="sneaker" />
    </BasicLayout>
  );
}
