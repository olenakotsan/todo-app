import React, { useState } from "react";
import Container from "./Container";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

const data = [
  { id: 1, label: "Get started with React Native", done: true },
  { id: 2, label: "Read New Book", done: false },
  { id: 3, label: "Meditation", done: false },
];

function App() {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((todo) => todo.id === id);
    current.done = !current.done;
    setTodos(copy);
  };

  const deleteTodo = (id) =>
    setTodos([...todos].filter((todo) => todo.id !== id));

  const todoList = todos.map((todo) => (
    <Todo
      todo={todo}
      key={todo.id}
      changeTodo={changeTodo}
      deleteTodo={deleteTodo}
    />
  ));

  return (
    <Container>
      <h1 className="text-center text-3xl">Todo List</h1>
      {todoList}
      <NewTodo setTodos={setTodos} />
    </Container>
  );
}

export default App;
