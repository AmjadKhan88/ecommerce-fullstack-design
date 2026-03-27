import { useState } from "react";

const FALLBACK = "https://via.placeholder.com/400x400?text=No+Image";

export default function ProductImage({
  src,
  alt,

  className = "",

  containerClass = "",
}) {
  const [loaded, setLoaded] = useState(false);

  const [error, setError] = useState(false);

  return (
    <div
      className={`

relative
bg-gray-100
overflow-hidden
rounded-lg

${containerClass}

`}
    >
      {/* skeleton */}

      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      <img
        src={error ? FALLBACK : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);

          setLoaded(true);
        }}
        className={`

transition

duration-500

object-contain

w-full
h-full

${loaded ? "opacity-100" : "opacity-0"}

${className}

`}
      />
    </div>
  );
}
