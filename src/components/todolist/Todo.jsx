// primitive js
export const Todo = ({ text, isCompleted, isDeleted = false }) => {
  if (isDeleted) {
    return null;
  } else if (isCompleted) {
    return (
      <li>
        <strike>{text}</strike>
      </li>
    );
  } else {
    return (
      <>
        <li>{text}</li>
      </>
    );
  }
};

// ternary operator
export const Todos = ({ text, isCompleted, isDeleted = false }) => {
  if (isDeleted) {
    return null;
  } else {
    return (
      <>
        {/* ternary operator */}
        <li>{isCompleted ? <strike>{text}</strike> : text}</li>
        {/* AND operation */}
        <li>
          {text} {isCompleted && "✅"}
        </li>
      </>
    );
  }
};
