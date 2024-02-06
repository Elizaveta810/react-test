import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";


function Header({addCard}) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button onClick={addCard} className="header__btn-main-new _hover01" id="btnMainNew">
              Создать новую задачу
            </button>
            <div onClick={togglePopup} className="header__user _hover02">
              Ivan Ivanov
            </div>
            {isOpened && (
             <PopUser/>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
