import React from "react";
import { FruitType } from "../../types/fruit";

type Props = {
  fruits: FruitType[] | undefined;
};

export default function FruitTable({ fruits }: Props) {
  return (
    <div className="h-5/6 overflow-x-auto mt-4">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th></th>
            <td>Name</td>
            <td>Family</td>
            <td>Order</td>
            <td>Genus</td>
            <td>Calories</td>
            <td>action</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fruits?.map((fruit: FruitType) => (
            <tr key={fruit.id} className="hover">
              <td></td>
              <td>{fruit.name}</td>
              <td>{fruit.family}</td>
              <td>{fruit.order}</td>
              <td>{fruit.genus}</td>
              <td>{fruit.nutritions.calories} cal</td>
              <td>
                <div className="flex justify-end">
                  <button className="btn btn-primary btn-xs">Add</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
