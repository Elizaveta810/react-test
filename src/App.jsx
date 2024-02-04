import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PopExit from "./components/popups/PopExit/PopExit";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import Header from "./components/Header/Header";
import Column from "./components/Column/Column";
import MainContent from "./components/MainContent/MainContent";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopBrowse />
        <PopNewCard />

        <Header />
        <MainContent>
          {statusList.map((status) => (
            <Column title={status} key={status} />
          ))}
          {/*<Column title={"Без статуса"} />
          <Column title={"Нужно сделать"} />
          <Column title={"В работе"} />
          <Column title={"Тестирование"} />
          <Column title={"Готово"} />*/}
        </MainContent>
      </div>

      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
