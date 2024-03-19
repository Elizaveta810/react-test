import Card from "../Card/Card";

function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((task) => (
          <Card
            topic={task.topic}
            title={task.title}
            date={task.date}
            key={task._id}
            id={task._id}
          />
        ))}
      </div>
    </div>
  );
}
export default Column;
