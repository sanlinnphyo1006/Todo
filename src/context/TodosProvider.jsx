import { createContext, useContext, useEffect, useState } from "react";

const TodosContext = createContext();
const TodosContextUpdate = createContext();

export const useTodos = () => useContext(TodosContext);
export const useTodosUpdate = () => useContext(TodosContextUpdate);

const TodosProvider = ({ children }) => {
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem("todosList");
    if (!list) {
      localStorage.setItem("todosList", JSON.stringify(todosList));
    } else if (list && list.length > 0) {
      setTodosList(JSON.parse(list));
    }
  }, []);
  return (
    <TodosContext.Provider value={todosList}>
      <TodosContextUpdate.Provider value={setTodosList}>
        {children}
      </TodosContextUpdate.Provider>
    </TodosContext.Provider>
  );
};

export default TodosProvider;
