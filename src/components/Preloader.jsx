import { useEffect, useState } from "react";

// Animasi saat halaman pertama kali dibuka: roda kapal berputar lalu menghilang
export default function Preloader() {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 900);
    const t2 = setTimeout(() => setGone(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;
  return (
    <div className={`preloader ${hide ? "hide" : ""}`}>
      <i className="fa-solid fa-dharmachakra spin" />
    </div>
  );
}
