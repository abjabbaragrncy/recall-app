"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useMetadata = (title: string, description: string) => {
  const pathname = usePathname();

  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description, pathname]);
};

export default useMetadata;
