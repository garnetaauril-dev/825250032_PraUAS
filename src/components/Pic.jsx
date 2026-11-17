import { useState } from "react";

// Gambar dengan cadangan.
// Mencari /img/<name>.jpg. Kalau belum ada, tampil gradient laut (tidak ada gambar rusak).
export default function Pic({ name, alt = "", className = "" }) {
  const [failed, setFailed] = useState(false);
  // variasi gradient berdasarkan nama supaya tiap gambar terlihat berbeda
  const hue = [...name].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % 40;

  return (
    <div
      className={`pic ${className}`}
      style={{
        background: `linear-gradient(135deg, hsl(${195 + hue} 70% 32%), hsl(${210 + hue} 75% 14%))`,
      }}
    >
      {!failed && (
        <img src={`/img/${name}.jpg`} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
