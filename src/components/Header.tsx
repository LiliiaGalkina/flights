import plane from "/image/plane.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__items">
          <div className="header__img">
            <img src={plane} alt="фиолетовый самолетик" />
          </div>
          <h1 className="header__title">Поиск авиабилетов</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
