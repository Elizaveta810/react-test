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
            topic={task.topik}
            title={task.title}
            data={task.data}
            key={task.id}
            id={task.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Column;
