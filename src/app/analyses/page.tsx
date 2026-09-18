import { buildCategoryMetadata, CategoryPage } from "@/components/CategoryPage";

export const metadata = buildCategoryMetadata("analyses");

export default function Page() {
  return <CategoryPage slug="analyses" />;
}
