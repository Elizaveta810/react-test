import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopNewCard.styled";
import { Link } from "react-router-dom";

 function PopNewCard() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(newTask);
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

  return (
    <S.PopNewCardDiv>
    <S.PopNewCardConteinerDiv>
      <S.PopNewCardBlockDiv>
        <S.PopNewCardContentDiv>
          <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
          <Link to={`/`}>
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
                  defaultValue={""}
                />
              </S.FormNewBlockDiv>
            </S.PopNewCardForm>
            <Calendar
              // selectedDate={selectedDate}
              // setSelectedDate={setSelectedDate}
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
          <S.FormNewCreateBtn onClick={handleFormSubmit}>
            Создать задачу
          </S.FormNewCreateBtn>
        </S.PopNewCardContentDiv>
      </S.PopNewCardBlockDiv>
    </S.PopNewCardConteinerDiv>
  </S.PopNewCardDiv>
    // <div className="pop-new-card" id="popNewCard">
    //   <div className="pop-new-card__container">
    //     <div className="pop-new-card__block">
    //       <div className="pop-new-card__content">
    //         <h3 className="pop-new-card__ttl">Создание задачи</h3>
    //         <a href="#" className="pop-new-card__close">
    //           ✖
    //         </a>
    //         <div className="pop-new-card__wrap">
    //           <form
    //             className="pop-new-card__form form-new"
    //             id="formNewCard"
    //             action="#"
    //           >
    //             <div className="form-new__block">
    //               <label htmlFor="formTitle" className="subttl">
    //                 Название задачи
    //               </label>
    //               <input
    //                 className="form-new__input"
    //                 type="text"
    //                 name="title"
    //                 value={newTask.title}
    //                 onChange={handleInputChange}
    //                 id="formTitle"
    //                 placeholder="Введите название задачи..."
    //                 autoFocus=""
    //               />
    //             </div>
    //             <div className="form-new__block">
    //               <label htmlFor="textArea" className="subttl">
    //                 Описание задачи
    //               </label>
    //               <textarea
    //                 className="form-new__area"
    //                 name="description"
    //                 value={newTask.description}
    //                 onChange={handleInputChange}
    //                 id="textArea"
    //                 placeholder="Введите описание задачи..."
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </form>
    //           <Calendar/>
    //         </div>

    //         <div className="prod_checbox">
    //           <div className="radio-toolbar">
    //             <input
    //               type="radio"
    //               id="radio1"
    //               name="topic"
    //               value="Web Design"
    //               onChange={handleInputChange}
    //             />
    //             <label htmlFor="radio1">Web Design</label>

    //             <input
    //               type="radio"
    //               id="radio2"
    //               name="topic"
    //               value="Research"
    //               onChange={handleInputChange}
    //             />
    //             <label htmlFor="radio2">Research</label>

    //             <input
    //               type="radio"
    //               id="radio3"
    //               name="topic"
    //               value="Copywriting"
    //               onChange={handleInputChange}
    //             />
    //             <label htmlFor="radio3">Copywriting</label>
    //           </div>
    //         </div>

    //         {/*<div className="pop-new-card__categories categories">
    //           <p className="categories__p subttl">Категория</p>
    //           <div className="categories__themes">
    //             <div className="categories__theme _orange _active-category">
    //               <p className="_orange">Web Design</p>
    //             </div>
    //             <div className="categories__theme _green">
    //               <p className="_green">Research</p>
    //             </div>
    //             <div className="categories__theme _purple">
    //               <p className="_purple">Copywriting</p>
    //             </div>
    //           </div>
    //         </div>*/}
    //         <button className="form-new__create _hover01" onClick={handleFormSubmit} id="btnCreate">
    //           Создать задачу
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default PopNewCard;
