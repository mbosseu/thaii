import { buildCategoryMetadata, CategoryPage } from "@/components/CategoryPage";

export const metadata = buildCategoryMetadata("interviews");

export default function Page() {
  return <CategoryPage slug="interviews" />;
}
