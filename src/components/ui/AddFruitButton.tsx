import React from "react";
import { FruitType } from "../../types/fruit";
import { useFruitStore } from "../../store/fruitStore";

type Props = {
  fruit: FruitType;
};

function AddFruitButton({ fruit }: Props) {
  const addFruit = useFruitStore((state) => state.addFruit);

  return (
    <button className="btn btn-primary btn-xs" onClick={() => addFruit(fruit)}>
      Add
    </button>
  );
}

export default AddFruitButton;
