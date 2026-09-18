import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  a: ({ href, children }) => {
    const url = href ?? "#";
    if (url.startsWith("/")) {
      return <Link href={url}>{children}</Link>;
    }
    return (
      <a href={url} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  },
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-article">
      <ReactMarkdown components={components}>{source}</ReactMarkdown>
    </div>
  );
}
