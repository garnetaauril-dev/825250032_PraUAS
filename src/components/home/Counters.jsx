import { useReveal, useCountUp } from "../../hooks/useReveal.js";
import { counters } from "../../data/data.js";

function CounterItem({ number, label, start }) {
  const value = useCountUp(number, start);
  return (
    <div className="counter-item">
      <h3>{value}K +</h3>
      <p>{label}</p>
    </div>
  );
}

// Banner biru: angka naik saat masuk layar
export default function Counters() {
  const [ref, visible] = useReveal(0.3);
  return (
    <section className="counters" ref={ref}>
      <div className="container">
        <div className="counter-row">
          {counters.map((c) => (
            <CounterItem key={c.label} number={c.number} label={c.label} start={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
