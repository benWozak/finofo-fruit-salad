import React from "react";
import { FruitType } from "../../types/fruit";
import { useFruitStore } from "../../store/fruitStore";
import { Plus } from "lucide-react";

type Props = {
  fruit: FruitType;
};

function AddFruitButton({ fruit }: Props) {
  const addFruit = useFruitStore((state) => state.addFruit);

  return (
    <button
      className="btn btn-primary rounded-full btn-xs"
      onClick={() => addFruit(fruit)}
    >
      <Plus size={16} />
    </button>
  );
}

export default AddFruitButton;
