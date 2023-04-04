const Active = ({ todosList, setTodosList }) => {
  const uncompletedTextStyle = "text-lg font-medium";
  const handlTodoCompletion = (id) => {
    const updatedList = todosList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodosList(updatedList);
    localStorage.setItem("todosList", JSON.stringify(updatedList));
  };
  return (
    <>
      {todosList
        .filter((t) => !t.isCompleted)
        .map((todo) => {
          return (
            <div key={todo.id} className="w-full shadow-sm py-4">
              <label className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  checked={todo.isCompleted}
                  onChange={() => handlTodoCompletion(todo.id)}
                />
                <span className={uncompletedTextStyle}>{todo.content}</span>
              </label>
            </div>
          );
        })}
    </>
  );
};

export default Active;
