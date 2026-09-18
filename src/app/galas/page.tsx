import { buildCategoryMetadata, CategoryPage } from "@/components/CategoryPage";

export const metadata = buildCategoryMetadata("galas");

export default function Page() {
  return <CategoryPage slug="galas" />;
}
