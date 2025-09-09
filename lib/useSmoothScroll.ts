import { useCallback } from "react";

export function useSmoothScroll() {
  return useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
}
