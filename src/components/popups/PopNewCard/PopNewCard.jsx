import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { Link, useNavigate } from "react-router-dom";
import { postTodo } from "../../../api";
import { useTask, useUser } from "../../../hooks/useUser";
import { appRoutes } from "../../../lib/appRoutes";

function PopNewCard() {

  const {user} = useUser()

  const  {putDownTask}  = useTask();
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(null); //состояние для того, что бы сохранять дату, которую мы выберем
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const handleFormSubmit = async() => {
   // e.preventDefault();
    const taskData = {
      ...newTask, date: selectedDate
    }
    console.log(taskData);
    // В ней же вызываем postTodo и передаём нужные данные
    await postTodo({
      // В task передаём объект с данными задачи
      task: taskData,
      // В token передаём токен, который получаем из пользователя
      // Самого пользователя получаем из контекста
      token: user.token,})
  };

  //Функция, которая будет срабытывать, когда пользователь будет вводить или стирать, какие то данные в поле ввода.
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя поля и его значение (value)- это value где хранится значение нашего поля ввода.

    //Функция для установки состояния
    setNewTask({
      ...newTask, // Копируем текущие данные из состояния
      [name]: value, // Обновляем нужное поле
    });
  };
  const handleTask = async (taskData) => {
    //  e.preventDefault();
    await postTodo(taskData).then((data) => {
      console.log(data);
      putDownTask(data.task);
      navigate(appRoutes.MAIN);
    });
  };
  const creatTaskBtn = (taskData) => {
    handleFormSubmit(taskData);
    handleTask(taskData);
  };
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
                <S.RadioToolbarDiv>
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
            </S.ChecBoxDiv>
            <S.FormNewCreateBtn onClick={creatTaskBtn}>
              Создать задачу
            </S.FormNewCreateBtn>
          </S.PopNewCardContentDiv>
        </S.PopNewCardBlockDiv>
      </S.PopNewCardConteinerDiv>
    </S.PopNewCardDiv>
  );
}
export default PopNewCard;
