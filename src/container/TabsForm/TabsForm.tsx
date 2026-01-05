import { useState } from "react";
import Interest from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabsForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: <Profile />,
    },
    {
      name: "Settings",
      component: <Settings />,
    },
    {
      name: "Interest",
      component: <Interest />,
    },
  ];

  const activeTabComponent = tabs[activeTab];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="">
        {tabs.map((tab, index) => {
          return (
            <div key={tab.name} onClick={() => setActiveTab(index)}>
              {tab.name}
            </div>
          );
        })}
        <div>{activeTabComponent.component}</div>
      </div>
    </div>
  );
};

export default TabsForm;
