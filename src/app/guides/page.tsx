import { CategoryPage, buildCategoryMetadata } from "@/components/CategoryPage";

export const metadata = buildCategoryMetadata("guides");

export default function GuidesPage() {
  return <CategoryPage slug="guides" />;
}
