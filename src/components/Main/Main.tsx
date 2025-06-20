import FilterCountTransfers from "./FilterCountTransfers";
import FilterCompany from "./FilterCompany";
import style from "./main.module.scss";
import Ticket from "./Ticket";
import FilterMobile from "./FilterMobile";
import { useState } from "react";

export default function Main() {
	const [isCheapActive, setIsCheapActive] = useState(true);
	const [isFastActive, setIsFastActive] = useState(false);
	const [isOptimalActive, setIsOptimalActive] = useState(false);

	const onFilterCheap = () => {
		if (!isCheapActive) {
			setIsCheapActive(true);
			setIsFastActive(false);
			setIsOptimalActive(false);
		}
	}

	const onFilterFast = () => {
		if (!isFastActive) {
			setIsFastActive(true);
			setIsCheapActive(false);
			setIsOptimalActive(false);
		}
	}

	const onFilterOptimal = () => {
		if (!isOptimalActive) {
			setIsOptimalActive(true);
			setIsCheapActive(false);
			setIsFastActive(false);
		}
	}

  return (
    <div className={style.content}>
      <div className={style.content__filter}>
        <FilterCountTransfers />
        <FilterCompany />
      </div>
      <div className={style.content__info}>
        <div className={style.content__buttons}>
          <button
            className={style.content__button}
            onClick={onFilterCheap}
            style={{
              backgroundColor: isCheapActive ? "#4E148C" : "#E8EBF2",
              color: isCheapActive ? "#F7F9F7" : "#4E148C",
            }}
          >
            Самый дешевый
          </button>
          <button
            className={style.content__button}
            onClick={onFilterFast}
            style={{
              backgroundColor: isFastActive ? "#4E148C" : "#E8EBF2",
              color: isFastActive ? "#F7F9F7" : "#4E148C",
            }}
          >
            Самый быстрый
          </button>
          <button
            className={style.content__button}
            onClick={onFilterOptimal}
            style={{
              backgroundColor: isOptimalActive ? "#4E148C" : "#E8EBF2",
              color: isOptimalActive ? "#F7F9F7" : "#4E148C",
            }}
          >
            Самый оптимальный
          </button>
        </div>
        <FilterMobile />
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
