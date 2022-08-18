import React from "react";
import cn from "classnames";
import { HiCheck } from "react-icons/hi";
import { VscTrash } from "react-icons/vsc";

function Check() {
  return <HiCheck className="w-5 h-5"></HiCheck>;
}

function Trash() {
  return <VscTrash className="w-5 h-5"></VscTrash>;
}

function Todo({ todo, changeTodo, deleteTodo }) {
  return (
    <div className="flex justify-between rounded-3xl border-white border-4 m-4 p-4">
      <span
        className={cn({
          "line-through": todo.done,
        })}
      >
        {todo.label}
      </span>
      <div className="flex justify-between gap-4">
        <button onClick={() => changeTodo(todo.id)}>
          <Check done={todo.done} />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <Trash />
        </button>
      </div>
    </div>
  );
}

export default Todo;
