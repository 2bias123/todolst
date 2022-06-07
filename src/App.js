import DisplayTasks from "./components/DisplayTasks";
import Tasks from "./components/GetDatabaseTasks";
import TodoCard from "./components/InsertTask";

function App() {
  return (
    <div className="App">
     {/* <TodoCard></TodoCard> */}
     <DisplayTasks TaskData={Tasks()}></DisplayTasks>
    </div>
  );
}

export default App;
