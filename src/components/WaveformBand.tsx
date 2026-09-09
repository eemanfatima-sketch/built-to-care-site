// Soft multicolor waveform band from the show's social artwork.
// Used once, behind the hero only.

const BAR_COLORS = ["#2E86FF", "#F7A8C4", "#F7D774", "#8FE3C4"];

// Deterministic pseudo-random heights so SSR and client markup match.
const heights = Array.from({ length: 72 }, (_, i) => {
  const wave =
    Math.sin(i * 0.55) * 0.34 + Math.sin(i * 1.31 + 1.2) * 0.22 + Math.sin(i * 0.17) * 0.2;
  return 0.28 + Math.abs(wave) * 0.72;
});

export function WaveformBand() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-52"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
      }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 720 100"
        preserveAspectRatio="none"
        focusable="false"
      >
        {heights.map((h, i) => {
          const barHeight = h * 92;
          return (
            <rect
              key={i}
              x={i * 10 + 2}
              y={100 - barHeight}
              width={6}
              height={barHeight}
              rx={3}
              fill={BAR_COLORS[i % BAR_COLORS.length]}
              opacity={0.22}
            />
          );
        })}
      </svg>
    </div>
  );
}
