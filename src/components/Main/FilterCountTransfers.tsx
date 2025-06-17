import style from "./main.module.scss";

export default function FilterCountTransfers() {
	return (
    <div className={style.filter}>
      <h2 className={style.filter__title}>Количество пересадок</h2>
      <div className={style.filter__items}>
        <div className={style.filter__row}>
          <input
            type="checkbox"
            id="transit0"
            className={style.filter__rowcheckbox}
          />
          <p className={style.filter__rowtext}>Без пересадок</p>
        </div>
        <div className={style.filter__row}>
          <input
            type="checkbox"
            id="transit1"
            className={style.filter__rowcheckbox}
          />
          <p className={style.filter__rowtext}>1 пересадка</p>
        </div>
        <div className={style.filter__row}>
          <input
            type="checkbox"
            id="transit2"
            className={style.filter__rowcheckbox}
          />
          <p className={style.filter__rowtext}>2 пересадки</p>
        </div>
        <div className={style.filter__row}>
          <input
            type="checkbox"
            id="transit3"
            className={style.filter__rowcheckbox}
          />
          <p className={style.filter__rowtext}>3 пересадки</p>
        </div>
      </div>
    </div>
  );
}