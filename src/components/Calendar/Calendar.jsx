import { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker"; 
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null); //состояние для того, что бы сохранять дату, которую мы выберем

  let footer = <p>Пожалуйста, выберите дату.</p>;
  if (selectedDate) {
    footer = <p>Вы выбрали {format(selectedDate, "pp", { locale: ru })}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
  );
}
