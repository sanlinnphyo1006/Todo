import { useEffect, useState } from "react";
import DetailAddition from "./components/DetailAddition";
import TabPanel from "./components/TabPanel";
import All from "./layout/All";
import Active from "./layout/Active";
import Completed from "./layout/Completed";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
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
    <div className="max-w-screen-sm px-4 mx-auto">
      <h1 className="text-center text-4xl pt-8 pb-10">#todo</h1>
      <TabPanel activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab !== "completed" && (
        <DetailAddition todosList={todosList} setTodosList={setTodosList} />
      )}
      {activeTab === "all" && (
        <All todosList={todosList} setTodosList={setTodosList} />
      )}
      {activeTab === "active" && (
        <Active todosList={todosList} setTodosList={setTodosList} />
      )}
      {activeTab === "completed" && (
        <Completed todosList={todosList} setTodosList={setTodosList} />
      )}
    </div>
  );
};

export default App;
