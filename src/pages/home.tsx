import React, { useState } from "react";
import FruitList from "../components/fruitList";
import GroupedFruitList from "../components/fruitList/GroupedFruitList";
import FruitJar from "../components/fruitJar";
import Dropdown from "../components/ui/Dropdown";
import { GroupType } from "../types/fruit";

const Home = () => {
  const groupItems = [
    { id: "none" as GroupType, label: "None" },
    { id: "family" as GroupType, label: "Family" },
    { id: "order" as GroupType, label: "Order" },
    { id: "genus" as GroupType, label: "Genus" },
  ];
  const [selected, setSelected] = useState<GroupType>("none");

  const handleItemSelect = (item: { id: string | number; label: string }) => {
    setSelected(item.id as GroupType);
  };

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full h-96 md:h-screen md:w-1/2 bg-base-300 rounded-lg p-8 mb-4">
        <div className="flex flex-col sm:flex-row justify-between md:mb-4">
          <h2 className="text-2xl font-bold mb-2 sm:mb-0">Fruit Inventory</h2>
          <Dropdown
            items={groupItems}
            onItemSelect={handleItemSelect}
            buttonText={
              selected === "none" ? "Sort by group" : `Sorted by - ${selected}`
            }
          />
        </div>
        {selected === "none" ? (
          <FruitList />
        ) : (
          <GroupedFruitList groupBy={selected} />
        )}
      </div>
      <div className="md:divider md:divider-horizontal"></div>
      <div className="w-full md:w-1/2 bg-base-300 rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Fruit Jar</h2>
        <FruitJar />
      </div>
    </div>
  );
};

export default Home;
