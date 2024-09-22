import React, { useState } from "react";
import { useAllFruits } from "../../api/fruitQueries";
import FruitTable from "./FruitTable";
import FruitSingleList from "./FruitSingleList";

export default function FruitList() {
  const { data: fruits, isLoading, error } = useAllFruits();
  const [viewType, setViewType] = useState("list");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading fruits: {error.message}</div>;
  console.log(fruits);

  const handleViewChange = (view) => {
    setViewType(view);
  };

  return (
    <div className="h-5/6">
      <div className="join">
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="List View"
          checked={viewType === "list"}
          onChange={() => handleViewChange("list")}
        />
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="Table View"
          checked={viewType === "table"}
          onChange={() => handleViewChange("table")}
        />
      </div>
      <div className="h-60 md:h-full py-4">
        {viewType === "list" && <FruitSingleList fruits={fruits} />}
        {viewType === "table" && <FruitTable fruits={fruits} />}
      </div>
    </div>
  );
}
