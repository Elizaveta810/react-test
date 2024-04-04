import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
import {useUser } from "../../../hooks/useUser";
import { useTask} from "../../../hooks/useTask";

import { topicHeader } from "../../../lib/topic";
import { deleteTodo } from "../../../api";
function PopBrowse() {
  const { id } = useParams();
  const{task, setTask} = useTask();
  const {user} = useUser();
  const currentTask = task.find((element) => id === element._id);
  const navigate = useNavigate();

const deleteTask = () => {
  deleteTodo({
    token:user.token,
    _id: id
  })
  .then((data) => {
    setTask(data.tasks);
    navigate(appRoutes.MAIN);
  })
  .catch((error) => {
    alert (error);
  })
}




  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи:{currentTask.title}</S.PopBrowseTtl>
              <S.CategoriesTheme $themeColor={topicHeader[currentTask.topic]}>
                <S.CategoriesThemeP>{currentTask.topic}</S.CategoriesThemeP>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPSubttl>Статус</S.StatusPSubttl>
              <S.StatusThemes>
                <S.StatusThemeHide>
                  <S.StatusThemeHideP>Без статуса</S.StatusThemeHideP>
                </S.StatusThemeHide>
                {/* <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div> */}
              </S.StatusThemes>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="textArea01">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly=""
                    placeholder="Введите описание задачи..."
                     defaultValue={currentTask.description}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar />
            </S.PopBrowseWrap>

            {/* <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBrowseEditBtnBor>
                  Редактировать задачу
                </S.BtnBrowseEditBtnBor>
                <S.BtnBrowseEditBtnBor onClick={deleteTask}>Удалить задачу</S.BtnBrowseEditBtnBor>
              </S.BtnGroup>

              <Link to={appRoutes.MAIN}>
                <S.BtnBrowseClose>Закрыть</S.BtnBrowseClose>
              </Link>
            </S.PopBrowseBtnBrowse>
            {/* <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div> */}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
export default PopBrowse;
