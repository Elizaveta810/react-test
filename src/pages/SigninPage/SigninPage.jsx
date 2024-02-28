import { useState } from "react";
import signIn from "../../api";

function SigninPage({ login }) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  //Функция, которая будет срабытывать, когда пользователь будет вводить или стирать, какие то данные в поле ввода.
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение

    setLoginData({
      ...loginData, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };

  //Функция отправки обработки логина
  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn(loginData).then((data) => {
      login(data.user);
    });
  };

  return (
    
      <div className="wrapper">
        <div className="container-signin">
          <div className="modal">
            <div className="modal__block">
              <div className="modal__ttl">
                <h2>Вход</h2>
              </div>
              <form className="modal__form-login" id="formLogIn" action="#">
                <input
                  value={loginData.login}
                  onChange={handleInputChange}
                  className="modal__input"
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                ></input>
                <input
                  value={loginData.password}
                  onChange={handleInputChange}
                  className="modal__input"
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                ></input>
                <button
                  //onClick={login}
                  onClick={handleLogin}
                  className="modal__btn-enter _hover01"
                  id="btnEnter"
                >
                  Войти
                </button>
                <div className="modal__form-group">
                  <p>Нужно зарегистрироваться?</p>
                  <a href="signup.html">Регистрируйтесь здесь</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default SigninPage;
