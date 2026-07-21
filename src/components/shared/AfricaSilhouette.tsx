export function AfricaSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 460"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path
        d="M210 28c18 6 34 22 42 40 8 18 4 34-2 48 10 8 24 18 28 34 4 18-6 34-18 44 8 14 18 30 14 48-4 16-18 26-30 34 4 20 2 42-10 58-10 14-28 20-42 18-6 16-18 30-34 36-18 6-36 0-48-12-10 10-26 14-40 8-16-6-24-22-24-38-18-2-34-14-40-30-8-18 0-38 12-50-10-14-12-34-4-48 8-14 24-20 38-20 2-18 12-34 28-42 8-4 18-4 26-2 6-16 20-28 38-30 10-2 20 0 28 6 8-10 22-16 36-12z"
        opacity="0.85"
      />
      <circle cx="168" cy="150" r="3" fill="#c9a227" />
      <circle cx="210" cy="210" r="3" fill="#c9a227" />
      <circle cx="150" cy="260" r="3" fill="#c9a227" />
      <circle cx="230" cy="300" r="3" fill="#c9a227" />
      <path
        d="M168 150 L210 210 L150 260 L230 300"
        fill="none"
        stroke="#c9a227"
        strokeWidth="1"
        opacity="0.45"
      />
    </svg>
  );
}
