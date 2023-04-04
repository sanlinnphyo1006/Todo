import DeleteIcon from "../assets/delete-icon.svg";

const Completed = ({ todosList, setTodosList }) => {
  const completedTextStyle = "text-lg font-medium line-through";
  const handlTodoCompletion = (id) => {
    const updatedList = todosList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodosList(updatedList);
    localStorage.setItem("todosList", JSON.stringify(updatedList));
  };
  const handleCompleteTodoDeletion = (id, all = false) => {
    let updatedList = [];
    if (all) {
      updatedList = todosList.filter((todo) => !todo.isCompleted);
    } else {
      updatedList = todosList.filter((todo) => todo.id !== id);
    }
    setTodosList(updatedList);
    localStorage.setItem("todosList", JSON.stringify(updatedList));
  };
  return (
    <>
      {todosList
        .filter((t) => t.isCompleted)
        .map((todo) => {
          return (
            <div
              key={todo.id}
              className="w-full shadow-sm py-4 flex items-center justify-between"
            >
              <label className="w-full flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  checked={todo.isCompleted}
                  onChange={() => handlTodoCompletion(todo.id)}
                />
                <span className={completedTextStyle}>{todo.content}</span>
              </label>
              <button
                aria-label="Delete"
                onClick={() => handleCompleteTodoDeletion(todo.id)}
              >
                <img src={DeleteIcon} />
              </button>
            </div>
          );
        })}

      {todosList.length > 0 && (
        <button
          className="bg-[#EB5757] px-6 py-3 text-white flex items-center gap-1 text-sm rounded ms-auto"
          onClick={() => handleCompleteTodoDeletion(null, true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
          delete all
        </button>
      )}
    </>
  );
};

export default Completed;
