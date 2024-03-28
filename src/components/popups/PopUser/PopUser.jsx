import { Link } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import * as S from "./PopUser.styled";
import {useUser} from "../../../hooks/useUser"


function PopUser() {
  const {user} = useUser()
  return (
    <S.HeaderPopUserSet>
      {/* <a href="">x</a> */}
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
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
