import React, { useEffect, useState } from "react";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";
import Finished from "../Components/Finished";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const List = () => {
  const [taskString, setTaskString] = useState("");
  const [tasks, setTasks] = useState(getLocalStorage());
  const [completed, setCompleted] = useState([]);
  const [allFinished, setAllFinished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskString) return;
    const newTask = { task: taskString, id: new Date().getTime().toString() };
    setTasks([...tasks, newTask]);
    setTaskString("");
  };

  const removeItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const completeItem = (id) => {
    const newCompletedItem = tasks.find((item) => item.id == id);
    setTasks(tasks.filter((item) => item.id !== id));
    setCompleted([...completed, newCompletedItem]);
  };

  const uncompleteItem = (id) => {
    const newUncompleted = completed.find((item) => item.id == id);
    setTasks([...tasks, newUncompleted]);
    setCompleted(completed.filter((item) => item.id !== id));
  };

  const newList = () => {
    setTasks([]);
    setCompleted([]);
    setAllFinished(false);
  };

  useEffect(() => {
    if (tasks.length < 1 && completed.length > 0) {
      setAllFinished(true);
    }
  }, [tasks]);

  useEffect(() => {
    if (allFinished && tasks.length > 0) {
      setAllFinished(false);
    }
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={taskString}
          onChange={(e) => setTaskString(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="task-container">
        <h3 className={`${tasks.length > 0 ? "h3-visible" : "h3-hidden"}`}>
          To do:
        </h3>
        {tasks.map((item) => {
          const { task, id } = item;
          return (
            <div className="task-card" key={id}>
              <section>
                <p className="task-text">{`${task}`}</p>
                <div
                  className="checkbox"
                  onClick={() => completeItem(id)}
                ></div>
              </section>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          );
        })}
      </div>
      <div className="task-container completed">
        <h3 className={`${completed.length > 0 ? "h3-visible" : "h3-hidden"}`}>
          Completed
        </h3>
        {completed.map((item) => {
          const { task, id } = item;
          return (
            <div className="task-card completed" key={id}>
              <p className="task-text">{`${task}`}</p>
              <IconContext.Provider value={{ className: "icon-check" }}>
                <div onClick={() => uncompleteItem(id)}>
                  <BsCheck2Square />
                </div>
              </IconContext.Provider>
            </div>
          );
        })}
      </div>
      {allFinished && <Finished newList={newList} />}
    </div>
  );
};

export default List;
