export default function RetroButton({
  primary = false,
  className = "",
  children,
  ...props
}) {
  return (
    <a
      className={`inline-flex items-center gap-2 border-2 border-ink px-5 py-2.5 font-bold shadow-bevel active:translate-x-0.5 active:translate-y-0.5 active:shadow-bevel-down ${
        primary ? "bg-maroon text-white" : "bg-silver text-ink"
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
