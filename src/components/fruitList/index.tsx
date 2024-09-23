import React, { useState } from "react";
import { useAllFruits } from "../../api/fruitQueries";
import FruitTable from "./FruitTable";
import FruitSingleList from "./FruitSingleList";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import SearchBar from "../ui/SearchBar";
import { FruitType } from "../../types/fruit";

export default function FruitList() {
  const { data: fruits, isLoading, error } = useAllFruits();
  const [viewType, setViewType] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const handleViewChange = (view) => {
    setViewType(view);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredFruits = fruits?.filter((fruit: FruitType) =>
    fruit.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="h-5/6">
      <div className="flex justify-between">
        <div className="join">
          <input
            className="join-item btn btn-sm"
            type="radio"
            name="options"
            aria-label="List View"
            checked={viewType === "list"}
            onChange={() => handleViewChange("list")}
          />
          <input
            className="join-item btn btn-sm"
            type="radio"
            name="options"
            aria-label="Table View"
            checked={viewType === "table"}
            onChange={() => handleViewChange("table")}
          />
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="h-60 md:h-full pb-4">
        {viewType === "list" && <FruitSingleList fruits={filteredFruits} />}
        {viewType === "table" && <FruitTable fruits={filteredFruits} />}
      </div>
    </div>
  );
}
