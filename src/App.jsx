import "./App.css";
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";

//импорт домашки
import Homework02 from "./homeworks/homework02/Homework02";
import Homework03 from "./homeworks/homework03/Homework03";

function App() {
  return (
    <div className="App">
      {/*  <Lesson02 /> */}
      {/* <Homework02 /> */}
      {/*  <Lesson03 /> */}
      <Homework03 />
    </div>
  );
}

export default App;
