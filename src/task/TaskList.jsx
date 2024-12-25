export const TaskList = ({ items = [], onDelete }) => {
  return (
    <>
      <h3>List of Task</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={onDelete(index)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
};
