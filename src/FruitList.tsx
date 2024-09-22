import React from "react";
import { useAllFruits } from "./api/fruitQueries";
import { FruitType } from "./types/fruit";

export const FruitList: React.FC = () => {
  const { data: fruits, isLoading, error } = useAllFruits();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading fruits: {error.message}</div>;

  return (
    <ul>
      {fruits?.map((fruit: FruitType) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
};
