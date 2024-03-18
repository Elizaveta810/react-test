import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
/* Если в файле несколько Styled Components, которые мы хотим импортировать, то не нужно их писать все через запятую,
 т.к. их может быть много. Поэтому используем такую запись 
 (* - означает импортируй вообще все от куда то....  as - означает краткое название по которому мы будем обращать ко всему,что в этом файле есть, 
  а через точку мы обрачаемся к каким то конкретным вещам. ) */
import * as S from "./Header.styled";
import { Container } from "../../styled/common/Common.styled";
import { Link } from "react-router-dom";

function Header() {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup() {
    setIsOpened((prev) => !prev);
  }
  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <S.Img src="images/logo.png" alt="logo" />
          </S.HeaderLogo>
          {/* <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div> */}
          <S.HeaderNav>
            <Link to={"/create"}>
              <S.HeaderBtnMainNew>Создать новую задачу</S.HeaderBtnMainNew>
            </Link>
            <S.HeaderUser onClick={togglePopup}>Ivan Ivanov</S.HeaderUser>
            {isOpened && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
export default Header;
