import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";

function PopUser () {
  return(<div className="header__pop-user-set pop-user-set" id="user-set-target">
  {/* <a href="">x</a> */}
  <p className="pop-user-set__name">Ivan Ivanov</p>
  <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
  <div className="pop-user-set__theme">
    <p>Темная тема</p>
    <input type="checkbox" className="checkbox" name="checkbox" />
  </div>
  <Link to={appRoutes.EXIT}>
  <span type="button" className="_hover03">
   Выйти
  </span>
  </Link>
</div>
  )
} 

export default PopUser;