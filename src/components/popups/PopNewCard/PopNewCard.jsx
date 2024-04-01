import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { Link, useNavigate } from "react-router-dom";
import { postTodo } from "../../../api";
import { useTask, useUser } from "../../../hooks/useUser";
import { appRoutes } from "../../../lib/appRoutes";

function PopNewCard() {
  const { user } = useUser();

  const { putDownTask } = useTask();
  // const { setTask } = useTask();
  const navigate = useNavigate();
  const [error, setError] = useState(null)

  const [selectedDate, setSelectedDate] = useState(null); //состояние для того, что бы сохранять дату, которую мы выберем
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });
// Функция на проверку пустых полей ввода
  function isEmptyFields(arrFields) {
    return arrFields.some(el => el === '')
  }

  //функция срабатывает при нажатии добавить
  const handleFormSubmit = (e) => {
    e.preventDefault();

const {title, topic, description} = newTask
if(isEmptyFields([title.trim(), topic.trim(), description.trim(), selectedDate])){  
  setError('Заполни все поля')
  showError('Заполни все поля');
  return
}

    const taskData = {
      ...newTask,
      date: selectedDate,
    };
    

    postTodo({ taskData, token: user.token })
      .then((data) => {
        console.log(data)
        putDownTask(data.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        console.log(error);
        // alert(error);
        setError(error.message)
      });
  };

  //Функция, которая будет срабытывать, когда пользователь будет вводить или стирать, какие то данные в поле ввода.
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение (value)- это value где хранится значение нашего поля ввода.

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };
    function showError(errorText) {
      return alert(errorText);
    }
  return (
    <S.PopNewCardDiv>
      <S.PopNewCardConteinerDiv>
        <S.PopNewCardBlockDiv>
          <S.PopNewCardContentDiv>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <Link to={appRoutes.MAIN}>
              <S.PopNewCardCloseDiv>✖</S.PopNewCardCloseDiv>
            </Link>
            <S.PopNewCardWrapDiv>
              <S.PopNewCardForm>
                <S.FormNewBlockDiv>
                  <S.SubTtlLabel>Название задачи</S.SubTtlLabel>
                  <S.FormNewInput
                  $isError={error}
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus=""
                  />
                </S.FormNewBlockDiv>
                <S.FormNewBlockDiv>
                  <S.SubTtlLabel>Описание задачи</S.SubTtlLabel>
                  <S.FormNewArea
                   $isError={error}
                    name="description"
                    id="textArea"
                    value={newTask.description}
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."
                    // defaultValue={""}
                  />
                </S.FormNewBlockDiv>
              </S.PopNewCardForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopNewCardWrapDiv>
            <S.ChecBoxDiv>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesThemesDiv>
                <S.RadioToolbarDiv >
                  <S.CategoriesThemeOrangeInput
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  <S.CategoriesThemeOrangeLabel htmlFor="radio1">
                    Web Design
                  </S.CategoriesThemeOrangeLabel>

                  <S.CategoriesThemeGreenInput
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                  <S.CategoriesThemeGreenLabel htmlFor="radio2">
                    Research
                  </S.CategoriesThemeGreenLabel>

                  <S.CategoriesThemePurpleInput
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                  <S.CategoriesThemePurpleLabel htmlFor="radio3">
                    Copywriting
                  </S.CategoriesThemePurpleLabel>
                </S.RadioToolbarDiv>
              </S.CategoriesThemesDiv>
              {/* {error} */}
            </S.ChecBoxDiv>
            <S.FormNewCreateBtn onClick={handleFormSubmit}>
              Создать задачу
            </S.FormNewCreateBtn>
          </S.PopNewCardContentDiv>
        </S.PopNewCardBlockDiv>
      </S.PopNewCardConteinerDiv>
    </S.PopNewCardDiv>
  );
}
export default PopNewCard;
