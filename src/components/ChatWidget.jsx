import { useEffect, useState } from "react";

// Widget chat "Marty" di pojok kanan bawah (mockup)
export default function ChatWidget() {
  const [bubble, setBubble] = useState(false);
  const [promo, setPromo] = useState(false);

  // bubble muncul setelah 1.5 detik
  useEffect(() => {
    const t = setTimeout(() => setBubble(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="chat">
      {promo && (
        <div className="chat-promo">
          <div className="chat-head">
            <span className="avatar" /> Marty
            <button onClick={() => setPromo(false)} aria-label="Tutup">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="promo-box">
            <p>
              Say <mark>“Hello!”</mark> and Get Your DISCOUNT
            </p>
          </div>
          <button className="chat-start">START CHAT</button>
        </div>
      )}

      {bubble && !promo && (
        <div className="chat-bubble">
          <div className="chat-head">
            <span className="avatar" /> Marty
            <button onClick={() => setBubble(false)} aria-label="Tutup">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="chat-msg">Hi! What can I do for you?</div>
        </div>
      )}

      <button className="chat-fab" onClick={() => setPromo(!promo)} aria-label="Chat">
        <i className="fa-solid fa-message" />
      </button>
    </div>
  );
}
