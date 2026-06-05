import { useNavigate } from "react-router-dom";
import { useState } from "react";

const addresses = [
  {
    city: "Москва",
    name: "Мурр на Арбате",
    address: "ул. Арбат, 24",
    metro: "Арбатская",
    hours: "Вт–Пт: 10:00–22:00\nСб–Вс: 10:00–23:00\nПн: выходной",
    phone: "+7 (495) 123-45-67",
    cats: "Барсик, Уголёк",
    color: "var(--primary)",
  },
  {
    city: "Москва",
    name: "Мурр на Китай-городе",
    address: "Маросейка ул., 11",
    metro: "Китай-город",
    hours: "Вт–Пт: 10:00–22:00\nСб–Вс: 10:00–23:00\nПн: выходной",
    phone: "+7 (495) 234-56-78",
    cats: "Пуговка, Дымок",
    color: "var(--secondary)",
  },
  {
    city: "Москва",
    name: "Мурр на Патриках",
    address: "Малая Бронная ул., 18",
    metro: "Маяковская",
    hours: "Вт–Пт: 10:00–22:00\nСб–Вс: 10:00–23:00\nПн: выходной",
    phone: "+7 (495) 345-67-89",
    cats: "Персик, Маршал",
    color: "var(--accent)",
    colorText: "var(--dark)",
  },
  {
    city: "Самара",
    name: "Мурр на Куйбышева",
    address: "ул. Куйбышева, 90",
    metro: "Центр города",
    hours: "Вт–Пт: 10:00–22:00\nСб–Вс: 10:00–23:00\nПн: выходной",
    phone: "+7 (846) 456-78-90",
    cats: "Барсик, Пуговка",
    color: "var(--primary)",
  },
  {
    city: "Самара",
    name: "Мурр на Ленинградской",
    address: "ул. Ленинградская, 55",
    metro: "Пешеходная зона",
    hours: "Вт–Пт: 10:00–22:00\nСб–Вс: 10:00–23:00\nПн: выходной",
    phone: "+7 (846) 567-89-01",
    cats: "Дымок, Уголёк",
    color: "var(--secondary)",
  },
  {
    city: "Самара",
    name: "Мурр на Волжском",
    address: "Волжский пр., 3",
    metro: "Набережная",
    hours: "Вт–Пт: 10:00–22:00\nСб–Вс: 10:00–23:00\nПн: выходной",
    phone: "+7 (846) 678-90-12",
    cats: "Персик, Маршал",
    color: "var(--accent)",
    colorText: "var(--dark)",
  },
];

const cities = ["Все", "Москва", "Самара"];

export default function Addresses() {
  const navigate = useNavigate();
  const [city, setCity] = useState("Все");
  const filtered = city === "Все" ? addresses : addresses.filter(a => a.city === city);

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>МУРР*КАФЕ</div>
        <nav>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Меню</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); window.scrollTo(0, 0); }}>О нас</a>
          <a href="/cats" onClick={(e) => { e.preventDefault(); navigate("/cats"); window.scrollTo(0, 0); }}>Коты</a>
          <a href="/addresses" onClick={(e) => { e.preventDefault(); navigate("/addresses"); }}>Адреса</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn-cta header-btn-cats" style={{ background: "var(--secondary)", color: "white" }} onClick={() => { navigate("/cats"); window.scrollTo(0, 0); }}>Познакомиться с котами</button>
          <button className="btn-cta" onClick={() => navigate("/")}>Забронировать</button>
        </div>
      </header>

      <main>
        <section style={{ padding: "60px 20px 20px", textAlign: "center", borderBottom: "var(--border)" }}>
          <h1 style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: "clamp(40px, 8vw, 90px)",
            fontWeight: 800,
            textTransform: "uppercase",
            lineHeight: 0.9,
            marginBottom: "20px",
          }}>
            НАШИ <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "var(--primary)" }}>АДРЕСА</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#555", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.6 }}>
            6 кафе в Москве и Самаре — коты ждут тебя в каждом
          </p>

          {/* Фильтр по городу */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            {cities.map(c => (
              <button
                key={c}
                className="btn-cta"
                onClick={() => setCity(c)}
                style={{
                  background: city === c ? "var(--dark)" : "white",
                  color: city === c ? "white" : "var(--dark)",
                }}
              >{c}</button>
            ))}
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * МОСКВА * АРБАТ * КИТАЙ-ГОРОД * ПАТРИКИ * САМАРА * КУЙБЫШЕВА * ЛЕНИНГРАДСКАЯ * ВОЛЖСКИЙ *
            МОСКВА * АРБАТ * КИТАЙ-ГОРОД * ПАТРИКИ * САМАРА * КУЙБЫШЕВА * ЛЕНИНГРАДСКАЯ * ВОЛЖСКИЙ
          </div>
        </div>

        <section className="section-padding">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0", border: "var(--border)" }}>
            {filtered.map((loc) => (
              <div key={loc.name} style={{ padding: "36px", borderBottom: "var(--border)", borderRight: "var(--border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 800, textTransform: "uppercase",
                    letterSpacing: "2px", background: loc.color, color: loc.colorText || "white",
                    padding: "4px 10px", display: "inline-block",
                  }}>{loc.city}</span>
                </div>
                <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "18px", fontWeight: 800, textTransform: "uppercase", marginBottom: "8px", lineHeight: 1.2 }}>{loc.name}</h3>
                <p style={{ fontSize: "16px", fontWeight: 700, marginBottom: "16px" }}>📍 {loc.address}</p>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "6px" }}>🚇 {loc.metro}</p>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "6px" }}>📞 {loc.phone}</p>
                <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px", whiteSpace: "pre-line" }}>🕐 {loc.hours}</p>
                <p style={{ fontSize: "13px", color: "var(--primary)", fontWeight: 700 }}>🐱 Коты: {loc.cats}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ textAlign: "center", padding: "60px 20px", background: "var(--accent)", borderTop: "var(--border)" }}>
          <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(24px, 5vw, 48px)", fontWeight: 800, textTransform: "uppercase", marginBottom: "16px" }}>
            ВЫБРАЛ МЕСТО?
          </h2>
          <p style={{ fontSize: "18px", color: "var(--dark)", marginBottom: "30px" }}>
            Забронируй стол — и коты будут ждать тебя!
          </p>
          <button className="btn-cta" style={{ background: "var(--dark)", color: "white" }} onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
            Забронировать стол
          </button>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">МУРР*КАФЕ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>Уютное кафе с живыми котами в атмосфере 70-х.</p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/"); }}>Меню</a></li>
            <li><a href="/about" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/about"); window.scrollTo(0, 0); }}>О нас</a></li>
            <li><a href="/cats" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/cats"); window.scrollTo(0, 0); }}>Наши коты</a></li>
            <li><a href="/addresses" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/addresses"); }}>Адреса</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт–Чт: 10:00–22:00</li>
            <li>Пт–Сб: 10:00–23:00</li>
            <li>Вс: 10:00–21:00</li>
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