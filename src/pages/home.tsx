import React, { useState } from "react";
import FruitList from "../components/fruitList";
import FruitTable from "../components/fruitList/FruitTable";
import Dropdown from "../components/ui/Dropdown";
import { GroupType } from "../types/fruit";
import { useAllFruits } from "../api/fruitQueries";

const Home = () => {
  const groupItems = [
    { id: "none" as GroupType, label: "None" },
    { id: "family" as GroupType, label: "Family" },
    { id: "order" as GroupType, label: "Order" },
    { id: "genus" as GroupType, label: "Genus" },
  ];
  const [selected, setSelected] = useState("None");
  const { data: fruits, isLoading, error } = useAllFruits();

  const handleItemSelect = (item: { id: string | number; label: string }) => {
    setSelected(item.label);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-base-300 rounded-lg p-8">
        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-bold ">Fruit Inventory</h2>
          <Dropdown
            items={groupItems}
            onItemSelect={handleItemSelect}
            buttonText={
              selected === "None" ? "Sort by group" : `Sorted by - ${selected}`
            }
          />
        </div>
        {selected === "None" ? <FruitList /> : <div>placeholder</div>}
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="w-1/2 bg-base-300 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Fruit Jar</h2>
        <p>Right side content</p>
      </div>
    </div>
  );
};

export default Home;
