import style from "./main.module.scss";
import pobeda from "../../assets/pobeda.png";

export default function Ticket() {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__item}>
        <div className={style.ticket__price}>12 680 Р</div>
        <div className={style.ticket__info}>
          <div className={style.ticket__text}>SVO - LED</div>
          <div className={style.ticket__time}>12:00 - 16:30</div>
        </div>
      </div>
      <div className={style.ticket__item}>
        <div className={style.ticket__price}></div>
        <div className={style.ticket__info}>
          <div className={style.ticket__text}>В пути</div>
          <div className={style.ticket__time}>4 ч 30 мин</div>
        </div>
      </div>
      <div className={style.ticket__item}>
        <div className={style.ticket__company}>
          <img src={pobeda} alt="победа" />
        </div>
        <div className={style.ticket__info}>
          <div className={style.ticket__text}>Пересадки</div>
          <div className={style.ticket__time}>1 пересадка</div>
        </div>
      </div>
    </div>
  );
}
