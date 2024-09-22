import React from "react";
import { FruitType, GroupType } from "../../types/fruit";
import { useAllFruits } from "../../api/fruitQueries";
import FruitSingleList from "./FruitSingleList";
import Error from "../ui/Error";
import Loading from "../ui/Loading";

interface GroupedFruitListProps {
  groupBy: GroupType;
}

export default function GroupedFruitList({ groupBy }: GroupedFruitListProps) {
  const { data: fruits, isLoading, error } = useAllFruits();

  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const groupedFruits = fruits?.reduce((acc, fruit) => {
    const key = fruit[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(fruit);
    return acc;
  }, {} as Record<string, FruitType[]>);

  return (
    <div className="h-5/6 overflow-auto rounded-xl">
      {Object.entries(groupedFruits || {}).map(([group, groupFruits]) => (
        <div
          key={group}
          className="collapse collapse-arrow bg-base-200 rounded-none"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title">
            {group} ({groupFruits.length})
          </div>
          <div className="collapse-content">
            <FruitSingleList fruits={groupFruits} />
          </div>
        </div>
      ))}
    </div>
  );
}
