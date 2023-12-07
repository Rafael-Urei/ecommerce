import ProductsListCommponent from "../components/product-list";
import BasicLayout from "../layouts/basic-layout";
import { FilterByType } from "../types/filters";

export default function SneakersPage() {
  return (
    <BasicLayout>
      <ProductsListCommponent category={FilterByType.SNEAKERS} />
    </BasicLayout>
  );
}
