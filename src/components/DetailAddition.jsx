import { useRef } from "react";
import uuid from "react-uuid";

import { useTodosUpdate } from "../context/TodosProvider";

const DetailAddition = () => {
  const updateTodosList = useTodosUpdate();
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value) {
      updateTodosList((currentValue) => {
        const updatedValue = [
          ...currentValue,
          {
            id: uuid(),
            content: inputRef.current.value,
            isCompleted: false,
          },
        ];
        localStorage.setItem("todosList", JSON.stringify(updatedValue));
        inputRef.current.value = "";
        return updatedValue;
      });
    }
  };

  const handeKeyDown = (e) => {
    if (e.key === "Enter" && inputRef.current.value) {
      handleClick();
    }
  };

  return (
    <div className="flex gap-6 pt-5">
      <input
        ref={inputRef}
        className="w-full text-sm font-semibold border border-[#BDBDBD] px-3 rounded-xl"
        type="text"
        placeholder="add detail"
        onKeyDown={handeKeyDown}
      />
      <button
        className="bg-[#2F80ED] px-10 py-5 shadow-sm rounded-xl text-white hover:opacity-80"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default DetailAddition;
