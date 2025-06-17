import FilterCountTransfers from "./FilterCountTransfers";
import FilterCompany from "./FilterCompany";
import style from "./main.module.scss";

export default function Main() {
	return (
		<div className={style.content}>
			<div className={style.content__filter}>
				<FilterCountTransfers />
				<FilterCompany/>
			</div>
			<div className={style.content__info}>

			</div>
		</div>
	)
}