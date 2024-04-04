import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Column from "../../components/Column/Column";
import MainContent from "../../components/MainContent/MainContent";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../api";
import {useUser } from "../../hooks/useUser";
import { useTask} from "../../hooks/useTask";
import { Wrapper } from "../../styled/common/Common.styled";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const { task, setTask } = useTask();

  useEffect(() => {
    getTodos({ token: user.token })
      .then((todos) => {
        //запрашивает данные из API
        console.log(todos);
        setTask(todos.tasks);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [user, setTask]);

  

  return (
    <>
      <Wrapper>
        <Outlet />

        <Header/>
        {isLoading ? (
          "Пожалуйста подождите, идет загрузка..."
        ) : (
          <MainContent>
            {statusList.map((status) => (
              <Column
                title={status}
                key={status}
                cardList={task.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        )}
      </Wrapper>
    </>
  );
}

export default MainPage;
