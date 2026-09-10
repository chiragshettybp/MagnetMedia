import { lazy, Suspense, useEffect, useRef, useState } from "react";

const SiteFooter = lazy(() =>
  import("@/components/ui/site-footer").then((m) => ({ default: m.SiteFooter }))
);

export const LazyFooter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {show ? (
        <Suspense fallback={null}>
          <SiteFooter />
        </Suspense>
      ) : null}
    </div>
  );
};