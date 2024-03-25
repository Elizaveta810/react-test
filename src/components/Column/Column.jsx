import Card from "../Card/Card";
import * as S from "./Column.styled";
import { format } from "date-fns";

function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <S.ColumnTitleP>{title}</S.ColumnTitleP>
      </S.ColumnTitle>
      <S.Cards>
        {cardList.map((task) => (
          <Card
            topic={task.topic}
            title={task.title}
            date={format(task.date, "dd.MM.yy")}
            key={task._id}
            id={task._id}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
}
export default Column;
