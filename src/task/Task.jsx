import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { useImmer } from "use-immer";

export const Task = () => {
  const [items, setItems] = useImmer([]);

  //callback function
  const handleSubmit = (input) => {
    setItems((draft) => {
      draft.push(input);
    });
  };

  // callback function receive index information
  const handleDelete = (index) => {
    return () => {
      alert("Delete item ?");
      setItems((items) => {
        items.splice(index, 1);
      });
    };
  };
  return (
    <div>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList items={items} onDelete={handleDelete} />
    </div>
  );
};
