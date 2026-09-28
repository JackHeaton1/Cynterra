import { cn } from "@/lib/utils";

/*
  Refactored from the supplied SVGs (Cynterra-Logo-White-Long.svg and
  Cynterra-LogoMark-White-Long.svg). The embedded <style> blocks hardcoded
  fill:#fff and fill:#abd037; here the white parts are driven by currentColor
  and the green parts by var(--logo-accent), so both marks invert cleanly
  between themes. In light mode --logo-accent stays the raw brand green
  (it reads fine at display sizes); text parts follow the text colour.
*/

const ACCENT = "var(--logo-accent, #abd037)";

/** Concentric arc mark from the primary logo, reusable as a standalone motif. */
export function ArcMotif({
  className,
  "aria-hidden": ariaHidden = true,
}: {
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 152 150"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      <path
        fill={ACCENT}
        fillRule="evenodd"
        d="M76.25,0a74.88,74.88,0,0,1,72.84,57.54h-2.78A72.22,72.22,0,0,0,67.16,3.27h.27a71.62,71.62,0,0,1,69.48,54.27h-2.79A68.89,68.89,0,0,0,23.18,22.07,74.61,74.61,0,0,1,76.25,0Zm72.84,92.14A74.86,74.86,0,0,1,23.18,127.63a68.9,68.9,0,0,0,111-35.49h2.78a71.61,71.61,0,0,1-69.48,54.3h-.27a72.21,72.21,0,0,0,79.15-54.29Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M67.21,8.11A66.77,66.77,0,0,0,2.74,57.54h2.8A64.06,64.06,0,0,1,67.21,10.81c1.1,0,2.19,0,3.28.08A64.17,64.17,0,0,0,13.32,57.54h2.81a61.43,61.43,0,0,1,98.41-29.75A66.57,66.57,0,0,0,67.21,8.11Zm-64.47,84a66.75,66.75,0,0,0,111.8,29.77A61.43,61.43,0,0,1,16.12,92.14h-2.8a64.14,64.14,0,0,0,57.17,46.67c-1.09.06-2.18.08-3.28.08A64.07,64.07,0,0,1,5.53,92.14Z"
      />
    </svg>
  );
}

/** Horizontal CYNTERRA wordmark (from Cynterra-LogoMark-White-Long.svg). */
function Wordmark() {
  return (
    <>
      <polygon
        fill={ACCENT}
        points="93.34 0.03 90.84 14.17 76.06 0.03 70.58 0.03 66.7 22.04 72.17 22.04 74.78 7.49 89.45 22.04 95.05 22.04 98.92 0.03 93.34 0.03"
      />
      <polygon
        fill={ACCENT}
        points="49.26 6.47 43.92 0 34.81 0 44.99 12.37 43.28 22.04 49.73 22.04 51.44 12.37 65.97 0 56.84 0 49.26 6.47"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M112.18,4.51,109.09,22h6.41l3.09-17.53H129L129.75,0H102.9l-.79,4.48ZM154,22l.85-4.84H137.21l.69-3.93h10.35l.84-4.79H138.72l.69-3.94h17.7L157.9,0H134.51l-3.88,22ZM167.18,8.12h13.76c.55,0,.9-.44,1-1.3l.17-.92c.15-.87-.05-1.3-.6-1.3H167.8ZM172,13.38h-5.78L164.74,22H159l3.89-22h23.42c1.44,0,2,1,1.81,3l-1.42,8A2.71,2.71,0,0,1,184,13.39h-4.11l7.28,8.66h-7.81ZM201,8.12h13.76c.55,0,.9-.44,1.06-1.3l.16-.92c.15-.87,0-1.3-.6-1.3H201.56l-.62,3.52Zm4.86,5.26H200L198.51,22h-5.73l3.89-22H220c1.45,0,2.05,1,1.81,3l-1.42,8a2.7,2.7,0,0,1-2.79,2.35h-4.07l7.28,8.66H213l-7.27-8.66ZM251.74,22,245.57,6l-8.36,11.33h6.36L242.75,22H226.5L229,18.79,243.58,0h6l8.64,22Z"
      />
      <path
        fill={ACCENT}
        d="M27.62,8.7l1.07-6.08Q28.86,0,24.92,0H7.58Q3.36.18,2.94,2.62c-.07.41-.14.79-.2,1.16l-2.47,14L0,18.85Q-.31,22,2.66,22H20.92a8.09,8.09,0,0,0,2.38-.41c1.59-.53,2.43-1.47,2.5-2.81l1.06-6H21.48l-.82,4.65h-15L7.93,4.71h15l-.7,4Z"
      />
    </>
  );
}

/**
 * Brand logo. `variant="wordmark"` is the horizontal mark (header/footer);
 * `variant="full"` is the arc mark with wordmark (hero, OG imagery).
 */
export function Logo({
  variant = "wordmark",
  className,
}: {
  variant?: "wordmark" | "full";
  className?: string;
}) {
  if (variant === "full") {
    return (
      <svg
        viewBox="0 0 258.22 149.7"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cynterra"
        className={cn("block", className)}
      >
        <path
          fill={ACCENT}
          fillRule="evenodd"
          d="M76.25,0a74.88,74.88,0,0,1,72.84,57.54h-2.78A72.22,72.22,0,0,0,67.16,3.27h.27a71.62,71.62,0,0,1,69.48,54.27h-2.79A68.89,68.89,0,0,0,23.18,22.07,74.61,74.61,0,0,1,76.25,0Zm72.84,92.14A74.86,74.86,0,0,1,23.18,127.63a68.9,68.9,0,0,0,111-35.49h2.78a71.61,71.61,0,0,1-69.48,54.3h-.27a72.21,72.21,0,0,0,79.15-54.29Z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M67.21,8.11A66.77,66.77,0,0,0,2.74,57.54h2.8A64.06,64.06,0,0,1,67.21,10.81c1.1,0,2.19,0,3.28.08A64.17,64.17,0,0,0,13.32,57.54h2.81a61.43,61.43,0,0,1,98.41-29.75A66.57,66.57,0,0,0,67.21,8.11Zm-64.47,84a66.75,66.75,0,0,0,111.8,29.77A61.43,61.43,0,0,1,16.12,92.14h-2.8a64.14,64.14,0,0,0,57.17,46.67c-1.09.06-2.18.08-3.28.08A64.07,64.07,0,0,1,5.53,92.14Z"
        />
        <polygon
          fill={ACCENT}
          points="93.31 63.85 90.81 77.99 76.03 63.85 70.55 63.85 66.67 85.86 72.14 85.86 74.74 71.31 89.42 85.86 95.01 85.86 98.89 63.85 93.31 63.85"
        />
        <polygon
          fill={ACCENT}
          points="49.22 70.29 43.89 63.82 34.78 63.82 44.96 76.19 43.25 85.86 49.69 85.86 51.4 76.19 65.93 63.82 56.8 63.82 49.22 70.29"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M112.14,68.33l-3.09,17.53h6.41l3.09-17.53h10.37l.79-4.48H102.86l-.79,4.48Zm41.79,17.53.85-4.84H137.17l.69-3.93h10.35l.84-4.79H138.68l.69-3.94h17.7l.79-4.51H134.47l-3.88,22Zm13.21-13.92H180.9c.55,0,.9-.44,1-1.3l.17-.92c.15-.87-.05-1.3-.6-1.3H167.76l-.62,3.52ZM172,77.2h-5.78l-1.52,8.66H159l3.89-22h23.42c1.44,0,2,1,1.81,3l-1.42,8a2.7,2.7,0,0,1-2.79,2.35H179.8l7.28,8.66h-7.81L172,77.2Zm28.91-5.26h13.76c.55,0,.9-.44,1.06-1.3l.16-.92c.15-.87,0-1.3-.6-1.3H201.52l-.62,3.52Zm4.86,5.26H200l-1.53,8.66h-5.73l3.89-22H220c1.45,0,2.05,1,1.81,3l-1.42,8a2.69,2.69,0,0,1-2.79,2.35h-4.07l7.28,8.66H213l-7.27-8.66Zm45.93,8.66-6.17-16-8.36,11.33h6.36l-.82,4.65H226.46L229,82.61l14.54-18.79h6l8.64,22Z"
        />
        <path
          fill={ACCENT}
          d="M27.58,72.52l1.07-6.08q.17-2.62-3.77-2.62H7.54Q3.33,64,2.9,66.44c-.07.41-.14.79-.2,1.16l-2.47,14L0,82.67q-.34,3.19,2.62,3.19,14.73,0,18.26,0a8,8,0,0,0,2.38-.41c1.59-.53,2.43-1.47,2.5-2.81l1.06-6H21.44l-.82,4.65h-15L7.89,68.53h15l-.7,4Z"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 258.22 22.05"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cynterra"
      className={cn("block", className)}
    >
      <Wordmark />
    </svg>
  );
}
