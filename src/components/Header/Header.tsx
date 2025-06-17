import plane from "../../assets/plane.png";
import style from "./header.module.scss"

export default function Header() {
	return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <img src={plane} alt="plane" />
      </div>
      <h1 className={style.header__title}>Поиск авиабилетов</h1>
    </header>
  );
}