import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader.jsx";
import Topbar from "./components/Topbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ChatWidget from "./components/ChatWidget.jsx";
import Home from "./pages/Home.jsx";
import HomeTwo from "./pages/HomeTwo.jsx";

// Scroll ke atas setiap pindah halaman (Home <-> Home Two)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Topbar />
      <Navbar />
      {/* key = pathname supaya animasi transisi halaman jalan tiap pindah */}
      <main key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-two" element={<HomeTwo />} />
          {/* halaman di luar scope diarahkan ke Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
