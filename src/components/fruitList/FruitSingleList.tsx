import React from "react";
import { FruitType } from "../../types/fruit";

type Props = {
  fruits: FruitType[] | undefined;
};

function FruitSingleList({ fruits }: Props) {
  return (
    <div className="h-5/6 overflow-x-auto mt-4">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <td>Name (calories)</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fruits?.map((fruit: FruitType) => (
            <tr key={fruit.id} className="hover">
              <td>
                {fruit.name} ({fruit.nutritions.calories} cal)
              </td>
              <td>
                <button className="btn btn-primary btn-xs">Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FruitSingleList;
