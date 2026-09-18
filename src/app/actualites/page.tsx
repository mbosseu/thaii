import { buildCategoryMetadata, CategoryPage } from "@/components/CategoryPage";

export const metadata = buildCategoryMetadata("actualites");

export default function Page() {
  return <CategoryPage slug="actualites" />;
}
