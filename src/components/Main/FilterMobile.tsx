import style from "./main.module.scss";
import arrow from "../../assets/arrow.png";
import FilterCompany from "./FilterCompany";
import FilterCountTransfers from "./FilterCountTransfers";
import { useState } from "react";

export default function FilterMobile() {
	const [showFilter, setShowFilter] = useState(false);

  return (
    <div className={style.filtermobile}>
      <div className={style.filtermobile__row}>
        <div className={style.filtermobile__info}>
          Любая авиакомпания, любое кол-во пересадок
        </div>
        <div className={style.filtermobile__button} onClick={() => setShowFilter(!showFilter)}>
          <p className={style.filtermobile__buttontext}>Открыть настройки</p>
          <img src={arrow} alt="белая стрелка вниз" style={{transform: showFilter ? "rotate(180deg)" : "none"}}/>
        </div>
		  </div>
		  <div className={style.filtermobile__items} style={{display: showFilter ? "flex" : "none"}}>
			  <FilterCompany />
			  <FilterCountTransfers/>
		  </div>
    </div>
  );
}
