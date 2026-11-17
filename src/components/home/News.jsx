import Pic from "../Pic.jsx";
import Reveal from "../Reveal.jsx";
import SectionTitle from "../SectionTitle.jsx";
import { newsBig, newsSmall } from "../../data/data.js";

export default function News() {
  return (
    <section className="section bg-grey">
      <div className="container">
        <Reveal>
          <SectionTitle script="Blogs & News" title="Our Latest News Feed" />
        </Reveal>
        <div className="row gy-4">
          <Reveal dir="left" className="col-lg-6">
            <div className="news-big">
              <Pic name={newsBig.img} />
              <div className="news-big-text">
                <span>{newsBig.tag}</span>
                <h3>{newsBig.title}</h3>
              </div>
            </div>
          </Reveal>

          <div className="col-lg-6">
            <div className="row gy-4">
              {newsSmall.map((n, i) => (
                <Reveal key={n.title} dir="right" delay={i * 100} className="col-6">
                  <div className="news-small">
                    <Pic name={n.img} />
                    <div className="news-small-body">
                      <small>UNCATEGORIZED</small>
                      <h6>{n.title}</h6>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
