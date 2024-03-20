import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Column from "../../components/Column/Column";
import MainContent from "../../components/MainContent/MainContent";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import { useUser } from "../../hooks/useUser";
import { Wrapper } from "../../styled/common/Common.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    getTodos({ token: user.token })
      .then((todos) => {
        //запрашивает данные из API
        console.log(todos);
        setCards(todos.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [user]);

  function addCard() {
    // Логика добавления карточки
    const newCard = {
      _id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  return (
    <>
      <Wrapper>
        <Outlet />

        <Header addCard={addCard} />
        {isLoading ? (
          "Пожалуйста подождите, идет загрузка..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                title={status}
                key={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </Wrapper>
    </>
  );
}

export default MainPage;
