import React from "react";
import { FruitType } from "../../types/fruit";
import AddFruitButton from "../ui/AddFruitButton";

type Props = {
  fruits: FruitType[] | undefined;
};

export default function FruitTable({ fruits }: Props) {
  return (
    <div className="h-full overflow-x-auto mt-4 rounded-xl bg-base-200">
      <table className="table table-sm table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <td>Name</td>
            <td>Family</td>
            <td>Order</td>
            <td>Genus</td>
            <td>Calories</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {fruits?.map((fruit: FruitType) => (
            <tr key={fruit.id} className="hover">
              <td>{fruit.name}</td>
              <td>{fruit.family}</td>
              <td>{fruit.order}</td>
              <td>{fruit.genus}</td>
              <td>{fruit.nutritions.calories} cal</td>
              <td>
                <div className="flex justify-end">
                  <AddFruitButton fruit={fruit} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
