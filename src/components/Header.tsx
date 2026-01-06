const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="logo">Эдуард Горбунов</div>
        <nav className="header-nav" aria-label="Основная навигация">
          <a href="#">Обо мне</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="primary-button" type="button">
          Связаться
        </button>
      </div>
    </header>
  );
};

export default Header;
