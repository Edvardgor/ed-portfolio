const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-portrait" aria-hidden="true" />
        <div className="hero-card">
          <p className="hero-kicker">Дизайнер цифровых продуктов</p>
          <h1 id="hero-title">Привет! Я Эд!</h1>
          <p className="hero-description">
            Более 6 лет создаю digital, product и UI/UX решения — от стратегии до
            финального интерфейса.
          </p>
          <button className="primary-button" type="button">
            Связаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
