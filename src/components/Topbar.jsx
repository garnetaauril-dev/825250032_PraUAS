// Bar gelap di paling atas (bar demo TemplateMonster) + tombol "Get Unlimited Downloads"
export default function Topbar() {
  return (
    <div className="topbar">
      <span className="topbar-title">
        <i className="fa-solid fa-angle-left" /> Tripzap – Yacht, Yachting &amp; Boat Rental WordPress Theme
      </span>
      <a href="#" className="topbar-btn" onClick={(e) => e.preventDefault()}>
        Get Unlimited Downloads
      </a>
    </div>
  );
}
