import { useEffect, useState } from "react";
import DetailAddition from "./components/DetailAddition";
import TabPanel from "./components/TabPanel";
import All from "./layout/All";
import Active from "./layout/Active";
import Completed from "./layout/Completed";
import TodosProvider from "./context/TodosProvider";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <TodosProvider>
      <div className="max-w-screen-sm px-4 mx-auto">
        <h1 className="text-center text-4xl pt-8 pb-10">#todo</h1>
        <TabPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab !== "completed" && <DetailAddition />}
        {activeTab === "all" && <All />}
        {activeTab === "active" && <Active />}
        {activeTab === "completed" && <Completed />}
      </div>
    </TodosProvider>
  );
};

export default App;
