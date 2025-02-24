import { useEffect } from "react";

export const GallaryPage = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  return <div>GallaryPage</div>;
};
