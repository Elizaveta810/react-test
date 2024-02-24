import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";

function PopExit() {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <Link to={appRoutes.SIGNIN}>
              <span className="pop-exit__exit-yes _hover01" id="exitYes">
                Да, выйти
              </span>
              </Link>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopExit;
