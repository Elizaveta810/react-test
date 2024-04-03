import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import * as S from "../PopEditCard/PopEditCard.styled";

function PopEditCard() {
  const { id } = useParams();
  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>Название задачи:{id}</S.PopBrowseTtl>
              <S.CategoriesTheme>
                <S.CategoriesThemeP>Web Design</S.CategoriesThemeP>
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
                    // defaultValue={""}
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

                  <S.BtnEditButtonBtmBor>
                    <a href="#">Отменить</a>
                  </S.BtnEditButtonBtmBor>
                  <S.BtnBrowseEditBtnBor>
                    <a href="#">Удалить задачу</a>
                  </S.BtnBrowseEditBtnBor>
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
