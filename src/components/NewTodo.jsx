import React, { useState } from "react";
import { nanoid } from "nanoid";

function NewTodo({ setTodos }) {
  const [label, setLabel] = useState("");

  const addTodo = (label) => {
    const newTodo = { id: `${nanoid()}`, label, done: false };
    setTodos((todos) => [...todos, newTodo]);
    setLabel("");
  };

  return (
    <>
      <input
        className="rounded-3xl border-zinc-400 border-4 w-4/5 m-4 p-4 outline-none"
        type="text"
        value={label}
        onKeyPress={(event) => event.key === "Enter" && addTodo(label)}
        onChange={(event) => setLabel(event.target.value)}
        placeholder="My new task"
      />
      <button
        type="button"
        className="rounded-3xl text-zinc-600 bg-zinc-400  p-4"
        onClick={(event) => addTodo(label)}
      >
        Add
      </button>
    </>
  );
}

export default NewTodo;
