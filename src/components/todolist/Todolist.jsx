import { Todo, Todos } from "./Todo";

const Todolist = () => {
  const data = [
    { id: 0, text: "Learn HTML!", isCompleted: true },
    { id: 1, text: "Learn CSS!", isCompleted: true },
    { id: 2, text: "Learn JS!", isCompleted: false },
    { id: 3, text: "Learn React JS!", isCompleted: false },
  ];
  // map data before rendering
  const todos = data.map((todo) => <Todo key={todo.id} {...todo} />);
  return (
    <>
      <h3>Todolist App Demo!</h3>
      <ul>{todos}</ul>
      <br />
      <h3>Todolist App with Ternary Operator!</h3>
      {/* mapping data on rendering */}
      {data.map((todo, i) => (
        <ul key={i}>
          <Todos {...todo} />
        </ul>
      ))}
    </>
  );
};

export default Todolist;
