import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopUser.styled";


function PopUser() {
  return (
    <S.HeaderPopUserSet>
      {/* <a href="">x</a> */}
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput type="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <Link to={appRoutes.EXIT}>
        <S.ExitButton>
          Выйти
        </S.ExitButton>
      </Link>
    </S.HeaderPopUserSet>
  );
}

export default PopUser;
