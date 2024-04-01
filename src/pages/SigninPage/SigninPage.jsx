import { useState } from "react";
import signIn from "../../api";
import { useUser } from "../../hooks/useUser";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { Wrapper } from "../../styled/common/Common.styled";
import * as S from "./SigninPage.styled";

function SigninPage() {
  const { login } = useUser();
  const navigate = useNavigate();
  //состояние, которое ругулирует все данные полей ввода в нашем приложении.
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  //Функция, которая будет срабытывать, когда пользователь будет вводить или стирать, какие то данные в поле ввода.
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение (value)- это value где хранится значение нашего поля ввода.

    //Функция для установки состояния
    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  //Функция отправки обработки логина
  const handleLogin = async (e) => {
    //console.log (loginData)
    e.preventDefault();
    await signIn(loginData).then((data) => {
      login(data.user);
      navigate(appRoutes.MAIN);
    });
  };

  return (
    <Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>Вход</S.ModalTtl>
            <S.ModalFormLogin id="formLogIn" action="#">
              <S.ModalInput
                value={loginData.login}
                onChange={handleInputChange}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              ></S.ModalInput>
              <S.ModalInput
                value={loginData.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              ></S.ModalInput>
              <S.ModalBtnEnter onClick={handleLogin} id="btnEnter">
                Войти
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                Нужно зарегистрироваться?
                <Link to={appRoutes.SIGNUP}>
                  <S.ModalFormGroupA>Регистрируйтесь здесь</S.ModalFormGroupA>
                </Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </Wrapper>
  );
}

export default SigninPage;
