import Header from "../Header/Header";
import Main from "../Main/Main";
import style from "./layout.module.scss"

export default function Layout() {
  return (
	  <div className={style.container}>
		  <Header />
		  <Main/>
    </div>
  );
}
