import { useState } from "react";
import { signUp } from "../../api";
import { useUser } from "../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import * as S from "./SignupPage.styled";
import { Wrapper } from "../../styled/common/Common.styled";

export default function SignupPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    await signUp(signupData).then((data) => {
      login(data.user);
      navigate(appRoutes.MAIN);
    });
  };

  return (
    <Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>Регистрация</S.ModalTtl>
            <S.ModalFormLogin id="formLogUp" action="#">
              <S.ModalInput
                onChange={handleInputChange}
                value={signupData.name}
                // className="first-name"
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
              ></S.ModalInput>
              <S.ModalInput
                onChange={handleInputChange}
                value={signupData.login}
                // className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              ></S.ModalInput>
              <S.ModalInput
                onChange={handleInputChange}
                value={signupData.password}
                // className=" password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              ></S.ModalInput>
              <S.AButton>
                <Link to={appRoutes.MAIN}>
                  <S.ModalBtnSignupEnt onClick={handleSignup} id="SignUpEnter">
                    Зарегистрироваться
                  </S.ModalBtnSignupEnt>
                </Link>
              </S.AButton>
              <Link to={appRoutes.SIGNIN}>
                <S.ModalFormGroup>
                  <S.ModalFormGroupP>
                    Уже есть аккаунт?
                    <S.ModalFormGroupA href="signin.html">
                      Войдите здесь
                    </S.ModalFormGroupA>
                  </S.ModalFormGroupP>
                </S.ModalFormGroup>
              </Link>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignup>
    </Wrapper>
  );
}
