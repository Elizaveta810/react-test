import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api";
import { useUser } from "../../hooks/useUser";
import { appRoutes } from "../../lib/appRoutes";

function SignupPage() {
  const {login} = useUser();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(signupData);
    await signUp(signupData)
      .then((data) => {
        console.log(data);
        login(data.user);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <body>
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
                  name="first-name"
                  id="first-name"
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
    </body>
  );
}

export default SignupPage;
