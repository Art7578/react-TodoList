import { useState } from "react";
import Header from "./Header/Header";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./ListTodo/ListTodo";
import { Container } from "react-bootstrap";

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "First todo",
      status: true
    },
    {
      id: 2,
      title: "Second todo",
      status: false
    },
    {
      id: 3,
      title: "Third todo",
      status: true
    },
    {
      id: 4,
      title: "Fourth todo",
      status: true
    },
    {
      id: 5,
      title: "Fifth todo",
      status: false
    },
    {
      id: 6,
      title: "Six todo",
      status: false
    }
  ])

  return (
    <Container>
      <Header/>
      <AddTodo todo={todo} setTodo={setTodo}/>
      <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  )
}

export default App;
