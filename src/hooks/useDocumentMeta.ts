import { useEffect } from "react";

interface Meta {
  title: string;
  description?: string;
}

const BASE = "PPIS";

/** Sets the document title and meta description per page for SEO. */
export function useDocumentMeta({ title, description }: Meta) {
  useEffect(() => {
    document.title = title.includes(BASE) ? title : `${title} | ${BASE}`;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
