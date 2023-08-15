import { createContext, useState, useEffect } from "react";
import { Task as data } from "../Components/data/Task";


export const TaskContext = createContext();

export function TaskContextProvider(props) {

  const [tasks, setTask] = useState([]);

  function createTask(newTask) {
    setTask([
      ...tasks,
      {
        title: newTask.title,
        id: newTask.length,
        description: newTask.description,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTask(tasks.filter((newTask) => newTask.id !== taskID));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return <TaskContext.Provider value = {{
    tasks,
    createTask,
    deleteTask
  }}>{props.children}</TaskContext.Provider>;
}
