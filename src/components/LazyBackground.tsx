import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyBackgroundProps {
  src: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  fixed?: boolean;
  alt?: string;
}

export function LazyBackground({
  src,
  className,
  imageClassName,
  overlayClassName,
  fixed = false,
  alt = "",
}: LazyBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [visible, src]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      {!loaded && <Skeleton className="absolute inset-0 rounded-none" aria-hidden="true" />}
      {visible && (
        <img
          src={src}
          alt={alt}
          aria-hidden={!alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            fixed ? "md:fixed md:inset-0 md:h-[100dvh]" : "",
            loaded ? "opacity-100" : "opacity-0",
            imageClassName,
          )}
        />
      )}
      {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} />}
    </div>
  );
}
