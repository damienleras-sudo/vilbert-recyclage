interface LogoProps {
  variant?: "color" | "white";
  className?: string;
  height?: number;
}

export default function Logo({ variant = "color", className = "", height = 52 }: LogoProps) {
  const green  = variant === "white" ? "#ffffff" : "#1a5c28";
  const dark   = variant === "white" ? "#ffffff" : "#222222";
  const yellow = "#f5b800";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 165"
      height={height}
      aria-label="Vilbert Recyclage"
      role="img"
      className={className}
      style={{ display: "block" }}
    >
      {/* ── RECYCLING SYMBOL ── exact paths, Bootstrap Icons "recycle" scaled ×10 */}
      <g transform="translate(4, 2) scale(10)" fill={green}>
        {/* Arrow 1 — top-left, pointing upper-right */}
        <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431z"/>
        {/* Arrow 2 — bottom-left */}
        <path d="M2.973 7.773l-1.255.337L4.258 3.66l.862 1.507a.5.5 0 1 0 .869-.497L4.9 2.56a.5.5 0 0 0-.876.065L.86 8.073a.5.5 0 0 0 .508.704l1.416-.379V9.5a.5.5 0 0 0 1 0V8.898l2.603.697a.5.5 0 0 0 .259-.966l-2.603-.697V7.11a.5.5 0 0 0-.36-.477z"/>
        {/* Arrow 3 — right */}
        <path d="M12.89 9.773l-2.603-.697a.5.5 0 0 0-.259.966l2.603.697v.132l-2.603.697a.5.5 0 0 0 .259.966l2.603-.697V12.5a.5.5 0 0 0 1 0V11.1l1.416.379a.5.5 0 0 0 .508-.704l-3.164-5.547a.5.5 0 0 0-.876-.065l-1.091 1.913a.5.5 0 1 0 .869.497l.861-1.507 2.477 4.437z"/>
      </g>

      {/* ── TOP YELLOW BAR ── */}
      <rect x="175" y="28" width="340" height="7" rx="3.5" fill={yellow} />

      {/* ── VILBERT ── */}
      <text
        x="175"
        y="116"
        fontSize="90"
        fontWeight="900"
        fontFamily="'Arial Black', 'Franklin Gothic Heavy', Impact, Arial, sans-serif"
        fill={green}
        letterSpacing="-2"
      >
        VILBERT
      </text>

      {/* ── BOTTOM GRADIENT BAR ── */}
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor={yellow} />
          <stop offset="65%"  stopColor={yellow} />
          <stop offset="100%" stopColor={yellow} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="175" y="130" width="140" height="10" rx="5"
            fill={variant === "white" ? yellow : "url(#lg1)"} />

      {/* ── RECYCLAGE ── */}
      <text
        x="328"
        y="143"
        fontSize="32"
        fontWeight="500"
        fontFamily="Arial, 'Helvetica Neue', sans-serif"
        fill={dark}
        letterSpacing="7"
      >
        RECYCLAGE
      </text>
    </svg>
  );
}
