import { useEffect, useRef, useState } from "react";

const TabPanel = ({ activeTab, setActiveTab }) => {
  const activeTabStyle = "w-1/2 text-sm font-semibold py-4 cursor-not-allowed";
  const unactiveTabStyle = "w-1/2 text-sm font-semibold py-4 hover:bg-gray-100";

  useEffect(() => {
    const indicator = document.querySelector("#activeTabIndicator");
    const tab = document.querySelector("[data-active-tab = true]");
    const width = `${tab.offsetWidth / 16}rem`;
    const left = `translateX(${(tab.offsetLeft - 64) / 16}rem)`;
    indicator.style.width = width;
    indicator.style.transform = left;
  }, [activeTab]);

  const handleTabActivation = (activeTab, e) => {
    const indicator = document.querySelector("#activeTabIndicator");
    const tab = document.querySelector("[data-active-tab = true]");
    const width = `${tab.offsetWidth / 16}rem`;
    const left = `translateX(${(tab.offsetLeft - 64) / 16}rem)`;
    indicator.style.width = width;
    indicator.style.transform = left;
    setActiveTab(activeTab);
  };

  return (
    <div className="flex px-16 relative border-b-2 border-b-[#BDBDBD]">
      <button
        className={activeTab === "all" ? activeTabStyle : unactiveTabStyle}
        disabled={activeTab === "all"}
        onClick={(e) => handleTabActivation("all", e)}
        id="test"
        data-active-tab={activeTab === "all"}
      >
        All
      </button>
      <button
        className={activeTab === "active" ? activeTabStyle : unactiveTabStyle}
        disabled={activeTab === "active"}
        onClick={(e) => handleTabActivation("active", e)}
        data-active-tab={activeTab === "active"}
      >
        Active
      </button>
      <button
        className={
          activeTab === "completed" ? activeTabStyle : unactiveTabStyle
        }
        disabled={activeTab === "completed"}
        onClick={(e) => handleTabActivation("completed", e)}
        data-active-tab={activeTab === "completed"}
      >
        Completed
      </button>
      <span
        className="absolute bottom-0 h-1 transition-transform duration-300 rounded-t-md bg-[#2F80ED]"
        id="activeTabIndicator"
      ></span>
    </div>
  );
};
export default TabPanel;
