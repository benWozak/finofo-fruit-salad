import React from "react";
import { FruitType } from "../../types/fruit";
import { useFruitStore } from "../../store/fruitStore";
import { Plus } from "lucide-react";

type Props = {
  fruit?: FruitType;
  disabled?: boolean;
};

function AddFruitButton({ fruit, disabled }: Props) {
  const addFruit = useFruitStore((state) => state.addFruit);

  return (
    <button
      className={`btn btn-primary rounded-full btn-xs ${
        disabled ? "hover:cursor-default" : ""
      }`}
      onClick={() => {
        !!fruit ? addFruit(fruit) : null;
      }}
    >
      <Plus size={16} />
    </button>
  );
}

export default AddFruitButton;
