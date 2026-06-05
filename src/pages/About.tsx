import { useNavigate } from "react-router-dom";

const facts = [
  { number: "6", label: "котов живут в кафе" },
  { number: "2021", label: "год основания" },
  { number: "4.9★", label: "средний рейтинг" },
  { number: "5000+", label: "довольных гостей" },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>МУРР*КАФЕ</div>
        <nav>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Меню</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>О нас</a>
          <a href="/cats" onClick={(e) => { e.preventDefault(); navigate("/cats"); window.scrollTo(0, 0); }}>Коты</a>
          <a href="#">Адреса</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn-cta" style={{ background: "var(--secondary)", color: "white" }} onClick={() => { navigate("/cats"); window.scrollTo(0, 0); }}>Познакомиться с котами</button>
          <button className="btn-cta" onClick={() => { navigate("/"); }}>Забронировать</button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "500px",
          borderBottom: "var(--border)",
        }}
          className="about-hero-section"
        >
          <div style={{
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "var(--border)",
          }}>
            <h1 style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "clamp(36px, 6vw, 80px)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 0.9,
              marginBottom: "30px",
            }}>
              МЫ — <br /><span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "var(--primary)" }}>МУРР КАФЕ</span>
            </h1>
            <p style={{ fontSize: "18px", color: "#555", lineHeight: 1.7, marginBottom: "30px" }}>
              Место, где можно выдохнуть, выпить хороший кофе и провести время с шестью котами-хозяевами заведения. Мы открылись в 2021 году с одной идеей — создать самое уютное место в городе.
            </p>
            <button
              className="btn-cta"
              style={{ background: "var(--primary)", color: "white", alignSelf: "flex-start" }}
              onClick={() => { navigate("/cats"); window.scrollTo(0, 0); }}
            >
              Познакомиться с котами
            </button>
          </div>
          <div style={{
            background: `url("https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/bb2211af-5842-4461-814c-09c2db44bc68.jpg") center center / cover`,
            minHeight: "400px",
          }} />
        </section>

        {/* Факты */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * УЮТНО * ВКУСНО * КОТЫ * РЕТРО ВАЙБ * С ЛЮБОВЬЮ * ЛУЧШЕЕ МЕСТО * УЮТНО * ВКУСНО * КОТЫ * РЕТРО ВАЙБ * С ЛЮБОВЬЮ * ЛУЧШЕЕ МЕСТО
          </div>
        </div>

        <section style={{ borderBottom: "var(--border)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="about-facts-grid">
          {facts.map((fact, i) => (
            <div key={i} style={{
              padding: "50px 30px",
              textAlign: "center",
              borderRight: i < facts.length - 1 ? "var(--border)" : "none",
            }}>
              <div style={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 800,
                color: "var(--primary)",
                marginBottom: "10px",
              }}>{fact.number}</div>
              <div style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", color: "#555" }}>{fact.label}</div>
            </div>
          ))}
        </section>

        {/* История */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "var(--border)" }} className="about-story-section">
          <div style={{
            background: `url("https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/d680cd0c-aeda-433e-a9cf-f7ee7689924b.jpg") center center / cover`,
            minHeight: "500px",
          }} />
          <div style={{
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderLeft: "var(--border)",
          }}>
            <span style={{
              fontSize: "12px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "var(--primary)",
              marginBottom: "20px",
              display: "block",
            }}>Наша история</span>
            <h2 style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: "25px",
            }}>КАК ВСЁ НАЧАЛОСЬ</h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
              Идея родилась просто: мы любили котов и хороший кофе. Почему бы не объединить? В 2021 году мы нашли уютное помещение, отделали его в стиле 70-х и привезли первых двух котов — Барсика и Уголька.
            </p>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8 }}>
              Сегодня в кафе живут шесть котов, каждый со своим характером. Мы следим за их здоровьем, счастьем и настроением — только довольный кот делает атмосферу по-настоящему уютной.
            </p>
          </div>
        </section>

        {/* Атмосфера */}
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "var(--border)" }} className="about-story-section">
          <div style={{
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "var(--border)",
          }}>
            <span style={{
              fontSize: "12px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "var(--secondary)",
              marginBottom: "20px",
              display: "block",
            }}>Атмосфера</span>
            <h2 style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: "25px",
            }}>МЕСТО, ГДЕ ХОЧЕТСЯ ОСТАТЬСЯ</h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "20px" }}>
              Виниловые пластинки, мягкие диваны, тёплый свет и запах свежего кофе — мы создавали атмосферу с любовью к деталям. Каждый уголок кафе продуман так, чтобы тебе хотелось задержаться.
            </p>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.8 }}>
              Никакого дресс-кода, никакой спешки. Просто ты, кофе и кот, который устроился рядом.
            </p>
          </div>
          <div style={{
            background: `url("https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/1a7c2c19-adc1-4aa6-9130-11d23a49b2ff.jpg") center center / cover`,
            minHeight: "500px",
          }} />
        </section>

        {/* CTA */}
        <section style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "var(--accent)",
          borderBottom: "var(--border)",
        }}>
          <h2 style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: "clamp(28px, 5vw, 56px)",
            fontWeight: 800,
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>ПРИХОДИ В ГОСТИ</h2>
          <p style={{ fontSize: "18px", color: "var(--dark)", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px" }}>
            Мы открыты каждый день кроме понедельника. Бронь не обязательна — просто приходи!
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="btn-cta"
              style={{ background: "var(--dark)", color: "white" }}
              onClick={() => { navigate("/"); window.scrollTo(0, 0); }}
            >
              Смотреть меню
            </button>
            <button
              className="btn-cta"
              style={{ background: "var(--secondary)", color: "white" }}
              onClick={() => { navigate("/cats"); window.scrollTo(0, 0); }}
            >
              Познакомиться с котами
            </button>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">МУРР*КАФЕ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Уютное кафе с живыми котами в атмосфере 70-х. Место, где хочется остаться подольше.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/"); }}>Меню</a></li>
            <li><a href="/about" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/about"); }}>О нас</a></li>
            <li><a href="/cats" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/cats"); window.scrollTo(0, 0); }}>Наши коты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт-Чт: 10:00 - 22:00</li>
            <li>Пт-Сб: 10:00 - 23:00</li>
            <li>Вс: 10:00 - 21:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 МУРР КАФЕ</span>
          <span>КОТЫ И КОФЕ</span>
          <span>IG / TG / VK</span>
        </div>
      </footer>
    </>
  );
}
