import { useState } from "react";
import TabItem from "./TabItem";
import { tabsData } from "@/constants/data";

const tabs = ["simple bookmarking", "speedy searching", "easy sharing"];

export default function TabSystem() {
  const [tab, setTab] = useState(tabs[0]);
  return (
    <div className=" mt-8 w-full ">
      <nav className=" w-full flex flex-col md:flex-row items-center border-b border-foreground-muted/15 ">
        {tabs.map((item, index) => (
          <button
            className={` p-4 hover:text-destructive duration-300 ease-in-out ${
              index === 0 && "border-t md:border-t-0"
            } border-foreground-muted/15 border-b w-full relative capitalize ${
              tab === item && "text-foreground"
            } `}
            onClick={() => setTab(item)}
          >
            {item}
            {tab === item && (
              <div className=" absolute md:left-0 bottom-0 h-[3px] bg-destructive md:w-full w-1/4 left-1/2 -translate-x-1/2 transform md:transform-none " />
            )}
          </button>
        ))}
      </nav>
      {tab === tabs[0] ? (
        <>
          <TabItem {...tabsData[0]} />
        </>
      ) : tab === tabs[1] ? (
        <>
          <TabItem {...tabsData[1]} />
        </>
      ) : (
        <>
          <TabItem {...tabsData[2]} />
        </>
      )}
    </div>
  );
}
