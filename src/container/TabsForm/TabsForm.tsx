import { useState } from "react";
import Interest from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabsForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [data, setData] = useState({
    name: "sourabh",
    email: "email",
    age: 23,
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Settings",
      component: Settings,
    },
    {
      name: "Interest",
      component: Interest,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="w-full h-[100vh] flex  justify-center pt-20 ">
      <div className="border border-gray-300 rounded-md p-4 w-full">
        <div className="flex gap-2 mb-10">
          {tabs.map((tab, index) => {
            return (
              <div
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`${
                  activeTab === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                } px-4 py-2 rounded-md cursor-pointer`}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div>
          <ActiveTabComponent data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default TabsForm;
