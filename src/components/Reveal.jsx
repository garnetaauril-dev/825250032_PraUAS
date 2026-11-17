import { useReveal } from "../hooks/useReveal.js";

// Pembungkus animasi scroll.
// props: dir = "up" | "left" | "right" | "zoom", delay = ms
export default function Reveal({ children, dir = "up", delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${dir} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
