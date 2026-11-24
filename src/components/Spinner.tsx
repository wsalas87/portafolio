interface SpinnerProps {
  className?: string;
  label?: string;
}

/** "spinner" component from the Figma library: 48px ring with an animated pink arc. */
export function Spinner({ className = "", label = "Cargando" }: SpinnerProps) {
  return (
    <span role="status" aria-label={label} className={`relative block size-[48px] ${className}`}>
      <svg
        className="absolute inset-[-8.33%] block"
        viewBox="0 0 56 56"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="28" cy="28" r="24" strokeWidth="8" className="stroke-spinner-background" />
        <circle
          cx="28"
          cy="28"
          r="24"
          strokeWidth="8"
          strokeLinecap="round"
          className="spinner-arc stroke-pink-40"
          style={{ strokeDasharray: "67.86 150.8" }}
        />
      </svg>
    </span>
  );
}
