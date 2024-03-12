import { useState } from "react";
import { signUp } from "../../api";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";

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
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                onChange={handleInputChange}
                value={signupData.name}
                className="modal__input first-name"
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
              ></input>
              <input
                onChange={handleInputChange}
                value={signupData.login}
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              ></input>
              <input
                onChange={handleInputChange}
                value={signupData.password}
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              ></input>
              <button
                onClick={handleSignup}
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
              >
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт? <a href="signin.html">Войдите здесь</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
