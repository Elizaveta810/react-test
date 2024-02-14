import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
/* Если в файле несколько Styled Components, которые мы хотим импортировать, то не нужно их писать все через запятую,
 т.к. их может быть много. Поэтому используем такую запись 
 (* - означает импортируй вообще все от куда то....  as - означает краткое название по которому мы будем обращать ко всему,что в этом файле есть, 
  а через точку мы обрачаемся к каким то конкретным вещам. ) */
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";


function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
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
            <button
              onClick={addCard}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              Создать новую задачу
            </button>
            <div onClick={togglePopup} className="header__user _hover02">
              Ivan Ivanov
            </div>
            {isOpened && <PopUser />}
          </nav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
export default Header;
