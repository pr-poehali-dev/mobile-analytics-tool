import { useNavigate } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  {
    tag: "Хит продаж", tagColor: "var(--primary)", tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/b315ebcc-ada9-4469-a46f-fdfaf5ccdd4e.jpg",
    name: "Кошачий капучино", price: "300 ₽",
    short: "Нежный капучино с latte-art в виде мордочки кота. Молоко на выбор — обычное, овсяное или миндальное.",
    details: "Наш бариста вручную рисует мордочку кота на каждой чашке. Используем свежеобжаренный арабика-бленд. Молоко на выбор: обычное, овсяное или миндальное. Подаётся с маленьким печеньем в форме лапки.",
    weight: "300 мл", time: "5 мин",
  },
  {
    tag: "Любимое", tagColor: "var(--secondary)", tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/2de03b9b-427a-4fb7-b752-c80cac814711.jpg",
    name: "Мурр-пирог", price: "350 ₽",
    short: "Домашний морковный пирог с кремом. Идеально к чаю и мурлыканью рядом.",
    details: "Выпекается каждое утро по домашнему рецепту. Морковный бисквит, нежный крем-чиз, грецкий орех. Подаётся тёплым с шариком ванильного мороженого по желанию (+50 ₽).",
    weight: "150 г", time: "готово",
  },
  {
    tag: "Популярное", tagColor: "var(--accent)", tagTextColor: "var(--dark)",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/b7a5deba-9cb9-4635-86a4-20158d5e575b.jpg",
    name: "Час с котами", price: "200 ₽",
    short: "Час в зоне отдыха с нашими котами + напиток на выбор. Лучшая антистресс-терапия в городе.",
    details: "60 минут в мягкой зоне с нашими шестью котами. В стоимость входит один напиток на выбор: чай, кофе или какао. Можно принести угощение для котов — продаётся на стойке. Бронь не требуется.",
    weight: "60 мин", time: "ежедневно",
  },
  {
    tag: "Новинка", tagColor: "#e07b54", tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/5fce768c-c858-4f6a-bc2c-22796107a0d0.jpg",
    name: "Рамен «Мяу»", price: "650 ₽",
    short: "Насыщенный бульон с лапшой, яйцом и нори. Наблюдай, как коты завидуют твоей тарелке.",
    details: "Бульон варится 8 часов на куриных костях с имбирём и соевым соусом. Пшеничная лапша, яйцо марунэ, нори, зелёный лук и кунжут. Можно добавить курицу или тофу (+100 ₽). Острота — по запросу.",
    weight: "450 г", time: "15 мин",
  },
  {
    tag: "Сладкое", tagColor: "var(--accent)", tagTextColor: "var(--dark)",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/3dd0b222-8026-4632-9e27-f8011d28814a.jpg",
    name: "Чизкейк «Пурр»", price: "350 ₽",
    short: "Нежный чизкейк с ягодным соусом. Подаётся в компании самого ласкового кота дня.",
    details: "Классический нью-йоркский чизкейк на песочной основе. Начинка из сливочного сыра, ванили и сметаны. Сверху — домашний соус из свежих ягод. Готовится накануне и настаивается всю ночь.",
    weight: "180 г", time: "готово",
  },
  {
    tag: "Уютное", tagColor: "var(--secondary)", tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/fd90aafe-b1ac-41b5-afd7-37601c132165.jpg",
    name: "Горячее какао", price: "185 ₽",
    short: "Бельгийский шоколад, маршмеллоу и корица. Идеально, когда кот устраивается у тебя на коленях.",
    details: "Готовится на цельном молоке с растопленным бельгийским шоколадом 70%. Сверху — облако маршмеллоу и щепотка корицы. Согревает и успокаивает. Идеально подходит к мурлыканью.",
    weight: "300 мл", time: "5 мин",
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2" });
  const [sent, setSent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof menuItems[0] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleClose = () => {
    setBookingOpen(false);
    setSent(false);
    setForm({ name: "", phone: "", date: "", time: "", guests: "2" });
  };

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">МУРР*КАФЕ</div>
        <nav>
          <a href="#menu" onClick={(e) => { e.preventDefault(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }}>Меню</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); window.scrollTo(0, 0); }}>О нас</a>
          <a href="/cats" onClick={(e) => { e.preventDefault(); navigate("/cats"); window.scrollTo(0, 0); }}>Коты</a>
          <a href="/addresses" onClick={(e) => { e.preventDefault(); navigate("/addresses"); window.scrollTo(0, 0); }}>Адреса</a>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn-cta header-btn-cats" style={{ background: "var(--secondary)", color: "white" }} onClick={() => { navigate("/cats"); window.scrollTo(0, 0); }}>Познакомиться с котами</button>
          <button className="btn-cta" onClick={() => setBookingOpen(true)}>Забронировать</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              КОТЫ И
              <br />
              <span>КОФЕ</span> — ВМЕСТЕ
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Уютное кафе с живыми котами в атмосфере 70-х. Приходи выпить кофе, попробовать вкусняшки и пообщаться с нашими усатыми жителями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }} onClick={() => setBookingOpen(true)}>
                Забронировать стол
              </button>
              <button className="btn-cta" style={{ background: "white" }} onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              КОТЫ
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #МУРЛЫКИ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              МЯУ!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЖИВЫЕ КОТЫ * ВКУСНЫЙ КОФЕ * УЮТНАЯ АТМОСФЕРА * РЕТРО ВАЙБ 70-Х * ЛУЧШЕЕ МЕСТО В ГОРОДЕ *
            ЖИВЫЕ КОТЫ * ВКУСНЫЙ КОФЕ * УЮТНАЯ АТМОСФЕРА * РЕТРО ВАЙБ 70-Х * ЛУЧШЕЕ МЕСТО В ГОРОДЕ
          </div>
        </div>

        <section id="menu" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ФАВОРИТЫ КОТОВ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="menu-card"
                onClick={() => setSelectedItem(item)}
                style={{ cursor: "pointer" }}
              >
                <span className="menu-tag" style={{ background: item.tagColor, color: item.tagTextColor }}>{item.tag}</span>
                <img src={item.img} alt={item.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{item.short}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАЙБ-ЧЕК ПРОЙДЕН.</h2>
            <p className="vibe-text">
              Мы не просто кафе. Мы — тихое место, где живут коты и всегда пахнет свежим кофе. Диваны в стиле 70-х, ретро музыка и тёплые мурлыки — всё это ждёт тебя. Приходи одному или с друзьями — коты рады всем.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }} onClick={() => { navigate("/cats"); window.scrollTo(0, 0); }}>
              Познакомиться с котами
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @MURR.CAFE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/fc582d96-e7cd-4599-8562-241f4eb11b63.jpg"
                alt="Интерьер кафе"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/b315ebcc-ada9-4469-a46f-fdfaf5ccdd4e.jpg"
                alt="Кофе с котом"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/f7aff207-5578-4fbe-8655-9d146498eb92.jpg"
                alt="Кот с едой"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/b7a5deba-9cb9-4635-86a4-20158d5e575b.jpg"
                alt="Коты играют"
              />
            </div>
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
            <li>
              <a href="#menu" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Меню
              </a>
            </li>
            <li>
              <a href="/about" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/about"); window.scrollTo(0, 0); }}>
                О нас
              </a>
            </li>
            <li>
              <a href="/cats" style={{ color: "inherit", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); navigate("/cats"); window.scrollTo(0, 0); }}>
                Наши коты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
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

      {/* Модальное окно товара */}
      {selectedItem && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedItem(null); }}
        >
          <div style={{ background: "var(--bg)", border: "var(--border)", boxShadow: "var(--shadow)", maxWidth: "520px", width: "100%", position: "relative", overflow: "hidden" }}>
            <button
              onClick={() => setSelectedItem(null)}
              style={{ position: "absolute", top: "16px", right: "16px", background: "white", border: "var(--border)", width: "36px", height: "36px", fontWeight: 800, fontSize: "16px", cursor: "pointer", zIndex: 1 }}
            >✕</button>
            <img src={selectedItem.img} alt={selectedItem.name} style={{ width: "100%", height: "260px", objectFit: "cover", borderBottom: "var(--border)" }} />
            <div style={{ padding: "30px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", background: selectedItem.tagColor, color: selectedItem.tagTextColor, padding: "4px 10px", display: "inline-block", marginBottom: "16px" }}>
                {selectedItem.tag}
              </span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "22px", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.1 }}>{selectedItem.name}</h2>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "var(--secondary)", whiteSpace: "nowrap", marginLeft: "16px" }}>{selectedItem.price}</span>
              </div>
              <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.7, marginBottom: "20px" }}>{selectedItem.details}</p>
              <div style={{ display: "flex", gap: "20px", marginBottom: "24px" }}>
                <div style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", color: "#888" }}>
                  <span style={{ display: "block", color: "var(--dark)", fontSize: "14px" }}>{selectedItem.weight}</span>
                  Объём / вес
                </div>
                <div style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", color: "#888" }}>
                  <span style={{ display: "block", color: "var(--dark)", fontSize: "14px" }}>{selectedItem.time}</span>
                  Время
                </div>
              </div>
              <button
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white", width: "100%", padding: "14px" }}
                onClick={() => { setSelectedItem(null); setBookingOpen(true); }}
              >
                Забронировать стол
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно бронирования */}
      {bookingOpen && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
            zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
            padding: "20px",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div style={{
            background: "var(--bg)", border: "var(--border)", boxShadow: "var(--shadow)",
            padding: "40px", maxWidth: "480px", width: "100%", position: "relative",
          }}>
            <button
              onClick={handleClose}
              style={{
                position: "absolute", top: "16px", right: "16px",
                background: "none", border: "none", fontSize: "24px",
                fontWeight: 800, cursor: "pointer", lineHeight: 1,
              }}
            >✕</button>

            {!sent ? (
              <>
                <h2 style={{
                  fontFamily: "'Unbounded', sans-serif", fontSize: "28px",
                  fontWeight: 800, textTransform: "uppercase", marginBottom: "8px",
                }}>ЗАБРОНИРОВАТЬ СТОЛ</h2>
                <p style={{ color: "#666", marginBottom: "30px", fontSize: "14px" }}>
                  Заполните форму — мы свяжемся для подтверждения
                </p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Ваше имя</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Как вас зовут?"
                      style={{
                        width: "100%", padding: "12px", border: "var(--border)",
                        background: "white", fontFamily: "inherit", fontSize: "14px",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Телефон</label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      style={{
                        width: "100%", padding: "12px", border: "var(--border)",
                        background: "white", fontFamily: "inherit", fontSize: "14px",
                      }}
                    />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Дата</label>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        style={{
                          width: "100%", padding: "12px", border: "var(--border)",
                          background: "white", fontFamily: "inherit", fontSize: "14px",
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Время</label>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        required
                        style={{
                          width: "100%", padding: "12px", border: "var(--border)",
                          background: "white", fontFamily: "inherit", fontSize: "14px",
                        }}
                      >
                        <option value="">Выбрать</option>
                        {["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Количество гостей</label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      style={{
                        width: "100%", padding: "12px", border: "var(--border)",
                        background: "white", fontFamily: "inherit", fontSize: "14px",
                      }}
                    >
                      {["1","2","3","4","5","6","7","8"].map(n => (
                        <option key={n} value={n}>{n} {n === "1" ? "гость" : n < "5" ? "гостя" : "гостей"}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn-cta"
                    style={{ background: "var(--primary)", color: "white", width: "100%", padding: "16px", fontSize: "14px", marginTop: "8px" }}
                  >
                    Отправить заявку
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "64px", marginBottom: "20px" }}>🐱</div>
                <h2 style={{
                  fontFamily: "'Unbounded', sans-serif", fontSize: "24px",
                  fontWeight: 800, textTransform: "uppercase", marginBottom: "12px",
                }}>ЗАЯВКА ПРИНЯТА!</h2>
                <p style={{ color: "#555", lineHeight: 1.6, marginBottom: "30px" }}>
                  Мы свяжемся с вами в ближайшее время для подтверждения брони. Коты уже ждут!
                </p>
                <button className="btn-cta" style={{ background: "var(--dark)", color: "white" }} onClick={handleClose}>
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}