import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import * as S from "../PopEditCard/PopEditCard.styled";
import { useTask } from "../../../hooks/useTask";
import { topicHeader } from "../../../lib/topic";
import { deleteTodo } from "../../../api";
import { useUser } from "../../../hooks/useUser";

function PopEditCard() {
  const { id } = useParams();
  const{task, setTask} = useTask();
   const currentTask = task.find((element) => id === element._id);
  const navigate = useNavigate();
  const {user} = useUser();
  


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
                <S.StatusTheme>
                  <S.StatusThemeP>Нужно сделать</S.StatusThemeP>
                </S.StatusTheme>
                <S.StatusThemeHide>
                  <S.StatusThemeHideP>В работе</S.StatusThemeHideP>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeHideP>Тестирование</S.StatusThemeHideP>
                </S.StatusThemeHide>
                <S.StatusThemeHide>
                  <S.StatusThemeHideP>Готово</S.StatusThemeHideP>
                </S.StatusThemeHide>
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

            <S.PopBrowseBtnEditHide>
              <S.BtnGroup>
                <S.BtnBrowse>
                  <S.BtnEditButton>
                    <S.BtnBgA>Сохранить</S.BtnBgA>
                  </S.BtnEditButton>

                  <S.BtnEditButton>
                    <S.BtnBgA>Отменить</S.BtnBgA>
                  </S.BtnEditButton>
                  <S.BtnEditButton>
                    <S.BtnBgA onClick={deleteTask}>Удалить задачу</S.BtnBgA>
                  </S.BtnEditButton>
                </S.BtnBrowse>

                <Link to={appRoutes.MAIN}>
                  <S.BtnBrowseClose>Закрыть</S.BtnBrowseClose>
                </Link>
              </S.BtnGroup>
            </S.PopBrowseBtnEditHide>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
export default PopEditCard;
