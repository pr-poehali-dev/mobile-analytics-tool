export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">МУРР*КАФЕ</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Коты</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
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
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
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
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/b315ebcc-ada9-4469-a46f-fdfaf5ccdd4e.jpg"
                alt="Кофе с котом"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Кошачий капучино</h3>
                  <span className="price">490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежный капучино с лatte-art в виде мордочки кота. Молоко на выбор — обычное, овсяное или миндальное.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Любимое
              </span>
              <img
                src="https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/f7aff207-5578-4fbe-8655-9d146498eb92.jpg"
                alt="Угощение для кота"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Мурр-пирог</h3>
                  <span className="price">350 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Домашний морковный пирог с кремом. Идеально к чаю и мурлыканью рядом.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/306582ae-9a0f-45ec-9685-624a3e4f43fd/files/b7a5deba-9cb9-4635-86a4-20158d5e575b.jpg"
                alt="Коты играют"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Час с котами</h3>
                  <span className="price">200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Час в зоне отдыха с нашими котами + напиток на выбор. Лучшая антистресс-терапия в городе.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАЙБ-ЧЕК ПРОЙДЕН.</h2>
            <p className="vibe-text">
              Мы не просто кафе. Мы — тихое место, где живут коты и всегда пахнет свежим кофе. Диваны в стиле 70-х, ретро музыка и тёплые мурлыки — всё это ждёт тебя. Приходи одному или с друзьями — коты рады всем.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
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
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
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
    </>
  );
}