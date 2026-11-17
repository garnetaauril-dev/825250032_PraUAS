// Judul section: tulisan script biru di atas + judul serif tebal
export default function SectionTitle({ script, title, light = false, left = false }) {
  return (
    <div className={`section-title ${light ? "light" : ""} ${left ? "left" : ""}`}>
      <div className="script-line">
        <span className="dash" />
        <span className="script">{script}</span>
        <span className="dash" />
      </div>
      <h2>{title}</h2>
    </div>
  );
}
