import "./App.css";
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";

//импорт домашки
import Homework02 from "./homeworks/homework02/Homework02";

function App() {
  return (
    <div className="App">
      {/*  <Lesson02 /> */}
      {/* <Homework02 /> */}
      <Lesson03 />
    </div>
  );
}

export default App;
