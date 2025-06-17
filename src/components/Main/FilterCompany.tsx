import style from "./main.module.scss";

export default function FilterCompany() {
	return (
    <div className={style.filter}>
      <h2 className={style.filter__title}>Компании</h2>
      <div className={style.filter__items}>
        <div className={style.filter__row}>
          <input
            type="radio"
            name="company"
            className={style.filter__rowradio}
          />
          <p className={style.filter__rowtext}>Победа</p>
        </div>
        <div className={style.filter__row}>
          <input
            type="radio"
            name="company"
            className={style.filter__rowradio}
          />
          <p className={style.filter__rowtext}>Red Wings</p>
        </div>
        <div className={style.filter__row}>
          <input
            type="radio"
            name="company"
            className={style.filter__rowradio}
          />
          <p className={style.filter__rowtext}>S7 Airlines</p>
        </div>
      </div>
    </div>
  );
}