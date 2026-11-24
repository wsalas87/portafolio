import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { Spinner } from "./Spinner";

/**
 * Image that shows a spinner placeholder until it has loaded. The placeholder fills the
 * nearest positioned ancestor, which in the case pages is the image's crop frame.
 */
export function LoadingImage({ onLoad, onError, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Cached images can finish before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <>
      <img
        ref={ref}
        loading="lazy"
        decoding="async"
        {...props}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setLoaded(true);
          onError?.(event);
        }}
      />
      {!loaded && (
        <span className="absolute inset-0 flex items-center justify-center bg-background-neutral rounded-dialog">
          <Spinner label="Cargando imagen" />
        </span>
      )}
    </>
  );
}
