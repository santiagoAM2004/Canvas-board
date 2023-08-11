import React, {useState, useEffect} from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import { Task as data } from "./Components/data/Task";

function App() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(newTask) {
    setTask([...tasks, {
        title: newTask.title,
        id: newTask.length,
        description: newTask.description
    }])
  }

  function deleteTask(taskID) {
    setTask(tasks.filter(newTask => newTask.id !== taskID))
  }

  return (
    <div>
      <TaskForm createTask = {createTask}/>
      <TaskList tasks = {tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
