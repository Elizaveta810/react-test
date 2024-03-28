import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../hooks/useUser";
import * as S from "./PopExit.styled";

function PopExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <Link to={appRoutes.SIGNIN}>
                <S.PopExitYes
                  onClick={() => {
                    logout();
                    navigate(appRoutes.SIGNIN);
                  }}
                  id="exitYes"
                >
                  Да, выйти
                </S.PopExitYes>
              </Link>
              <Link to={appRoutes.MAIN}>
                <S.PopExitNo id="exitNo">Нет, остаться</S.PopExitNo>
              </Link>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

export default PopExit;
