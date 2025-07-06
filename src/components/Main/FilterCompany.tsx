import style from "./main.module.scss";
import { useState } from "react";
import { filterTickets } from "../../store/flightsSlice";
import { useAppDispatch } from "../../store/hook";

let companies: string[] = [];


export default function FilterCompany() {
  const [filterCompany1, setFilterCompany1] = useState(false);
  const [filterCompany2, setFilterCompany2] = useState(false);
	const [filterCompany3, setFilterCompany3] = useState(false);
	
	const dispatch = useAppDispatch(); 

	const checkCompanies = (company: string) => {
		if (!companies.includes(company)) {
      companies.push(company);
    } else {
      companies = companies.filter((companyItem) => companyItem !== company);
    }
	};
	
  const handleFilterCompanyClick1 = () => {
	  setFilterCompany1(!filterCompany1);
	  checkCompanies("Победа");
	  dispatch(filterTickets());

  }

  const handleFilterCompanyClick2 = () => {
	  setFilterCompany2(!filterCompany2);
	  checkCompanies("Red Wings");
	   dispatch(filterTickets());
  }

  const handleFilterCompanyClick3 = () => {
	  setFilterCompany3(!filterCompany3);
	  checkCompanies("S7 Airlines");
	   dispatch(filterTickets());
	}
	
  return (
    <div className={style.filter}>
      <h2 className={style.filter__title}>Компании</h2>
      <div className={style.filter__items}>
        <div className={style.filter__row}>
          <input
            type="checkbox"
            id="company1"
            className={
              filterCompany1
                ? style.filter__rowcheckboxcircle +
                  " " +
                  style.filter__rowcheckboxcircle_after
                : style.filter__rowcheckboxcircle
            }
            checked={filterCompany1}
            onChange={handleFilterCompanyClick1}
          />
          <label htmlFor="company1" className={style.filter__rowtext}>
            Победа
          </label>
        </div>
        <div className={style.filter__row}>
          <input
            type="checkbox"
            id="company2"
            className={
              filterCompany2
                ? style.filter__rowcheckboxcircle +
                  " " +
                  style.filter__rowcheckboxcircle_after
                : style.filter__rowcheckboxcircle
            }
            checked={filterCompany2}
            onChange={handleFilterCompanyClick2}
          />
          <label htmlFor="company2" className={style.filter__rowtext}>
            Red Wings
          </label>
        </div>
        <div className={style.filter__row}>
          <input
            type="checkbox"
            id="company3"
            className={
              filterCompany3
                ? style.filter__rowcheckboxcircle +
                  " " +
                  style.filter__rowcheckboxcircle_after
                : style.filter__rowcheckboxcircle
            }
            checked={filterCompany3}
            onChange={handleFilterCompanyClick3}
          />
          <label htmlFor="transit3" className={style.filter__rowtext}>
            Red Wings
          </label>
        </div>
      </div>
    </div>
  );
}

export { companies }
