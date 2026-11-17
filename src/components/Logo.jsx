import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? "logo-light" : ""}`}>
      <i className="fa-solid fa-dharmachakra" />
      <span>
        Trip<em>Zap</em>
      </span>
    </Link>
  );
}
