import { format } from "date-fns";

import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { CalendarCustom, Calendaric, CategoriesP, ChooseDate } from "./Calendar.styled";

export default function Calendar({selectedDate,setSelectedDate }) {
 

  let footer = <ChooseDate>Выберите срок исполнения</ChooseDate>;
  if (selectedDate) {
    footer = <ChooseDate>Вы выбрали {format(selectedDate, "PP", { locale: ru })}</ChooseDate>;
  }
  return (
    <Calendaric>
    <CategoriesP>Даты</CategoriesP>
  <CalendarCustom locale={ru}
    mode="single"
    selected={selectedDate}
    onSelect={setSelectedDate}
    footer={footer}
  />
  </Calendaric>
  );
}
