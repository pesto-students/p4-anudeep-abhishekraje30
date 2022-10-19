import React, { useState } from "react";
import { ToDo } from "./ToDo";
import { ToDoForm } from "./ToDoForm";

export const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    if (!toDo.text || /^\s*$/.test(toDo.text)) {
      return;
    }
    const newToDos = [toDo, ...toDos];
    setToDos(newToDos);
  };

  const updateToDo = (toDoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setToDos((prev) =>
      prev.map((item) => (item.id === toDoId ? newValue : item))
    );
  };

  const removeToDo = (id) => {
    const removeArr = [...toDos].filter((todo) => todo.id !== id);
    setToDos(removeArr);
  };

  const completeToDo = (id) => {
    let updatedToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        toDo.isComplete = !toDo.isComplete;
      }

      return toDo;
    });

    setToDos(updatedToDos);
  };

  return (
    <>
      <h1>What are you planning Today?</h1>
      <ToDoForm addToDo={addToDo} />
      <ToDo
        toDos={toDos}
        completeToDo={completeToDo}
        removeToDo={removeToDo}
        updateToDo={updateToDo}
      />
    </>
  );
};
