import FilterCountTransfers from "./FilterCountTransfers";
import FilterCompany from "./FilterCompany";
import style from "./main.module.scss";
import Ticket from "./Ticket";
import FilterMobile from "./FilterMobile";

export default function Main() {
  return (
    <div className={style.content}>
      <div className={style.content__filter}>
        <FilterCountTransfers />
        <FilterCompany />
      </div>
      <div className={style.content__info}>
        <div className={style.content__buttons}>
          <button className={style.content__button}>Самый дешевый</button>
          <button className={style.content__button}>Самый быстрый</button>
          <button className={style.content__button}>Самый оптимальный</button>
        </div>
        <FilterMobile/>
        <div className={style.content__tickets}>
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
        <button className={style.button}>Загрузить еще билеты</button>
      </div>
    </div>
  );
}
