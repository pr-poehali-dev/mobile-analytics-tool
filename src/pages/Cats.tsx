import { useNavigate } from "react-router-dom";

const cats = [
  {
    name: "Барсик",
    character: "Ласковый и общительный — сам запрыгнет на колени",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/ba486ed5-ee67-4d50-82c7-b0eebb33a96f.jpg",
    tag: "Любимчик гостей",
    tagColor: "var(--primary)",
  },
  {
    name: "Уголёк",
    character: "Таинственный и независимый — подружится, когда захочет",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/a5f840eb-e215-426b-afd1-eda637db3a66.jpg",
    tag: "Загадочный",
    tagColor: "var(--dark)",
  },
  {
    name: "Пуговка",
    character: "Нежная и спокойная — идеальна для тихого вечера с книгой",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/281f99fc-710d-4790-868f-ddfdb9f0fa99.jpg",
    tag: "Самая мягкая",
    tagColor: "var(--secondary)",
  },
  {
    name: "Дымок",
    character: "Игривый и энергичный — принесёт тебе игрушку сам",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/66c4f447-ae8b-434f-9c3f-925296629d84.jpg",
    tag: "Заводила",
    tagColor: "var(--accent)",
    tagTextColor: "var(--dark)",
  },
  {
    name: "Персик",
    character: "Любопытная и весёлая — обязательно проверит твою чашку",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/504dd255-6bf9-4c3d-89dc-dcf1d939d7c8.jpg",
    tag: "Озорница",
    tagColor: "var(--primary)",
  },
  {
    name: "Маршал",
    character: "Величественный мейн-кун — король кафе и всеобщий любимец",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/511cb4a9-2e98-4280-8193-3a46f7f8c2a5.jpg",
    tag: "Король кафе",
    tagColor: "var(--secondary)",
  },
];

export default function Cats() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>МУРР*КАФЕ</div>
        <nav>
          <a href="/">Меню</a>
          <a href="/">О нас</a>
          <a href="/cats">Коты</a>
          <a href="/">Адреса</a>
        </nav>
        <button className="btn-cta" onClick={() => navigate("/")}>На главную</button>
      </header>

      <main>
        <section style={{ padding: "60px 20px 20px", textAlign: "center", borderBottom: "var(--border)" }}>
          <h1
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "clamp(40px, 8vw, 90px)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 0.9,
              marginBottom: "20px",
            }}
          >
            НАШИ <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "var(--primary)" }}>КОТЫ</span>
          </h1>
          <p style={{ fontSize: "18px", color: "#555", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.6 }}>
            Познакомься с жителями кафе — они уже ждут тебя!
          </p>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БАРСИК * УГОЛЁК * ПУГОВКА * ДЫМОК * ПЕРСИК * МАРШАЛ *
            БАРСИК * УГОЛЁК * ПУГОВКА * ДЫМОК * ПЕРСИК * МАРШАЛ
          </div>
        </div>

        <section className="section-padding">
          <div className="menu-grid">
            {cats.map((cat) => (
              <div key={cat.name} className="menu-card">
                <span
                  className="menu-tag"
                  style={{
                    background: cat.tagColor,
                    color: cat.tagTextColor || "white",
                  }}
                >
                  {cat.tag}
                </span>
                <img src={cat.img} alt={cat.name} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} />
                <div className="menu-card-body">
                  <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>{cat.name}</h3>
                  <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.5 }}>{cat.character}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            textAlign: "center",
            padding: "60px 20px",
            borderTop: "var(--border)",
            background: "var(--accent)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            ПРИХОДИ ПОЗНАКОМИТЬСЯ
          </h2>
          <p style={{ fontSize: "18px", color: "var(--dark)", marginBottom: "30px" }}>
            Все коты живут в кафе и ждут твоего визита каждый день
          </p>
          <button
            className="btn-cta"
            style={{ background: "var(--dark)", color: "white" }}
            onClick={() => navigate("/")}
          >
            Забронировать стол
          </button>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">МУРР*КАФЕ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Уютное кафе с живыми котами в атмосфере 70-х.
          </p>
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
