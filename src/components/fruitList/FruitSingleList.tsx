import React from "react";
import { FruitType } from "../../types/fruit";
import AddFruitButton from "../ui/AddFruitButton";

type Props = {
  fruits: FruitType[] | undefined;
};

function FruitSingleList({ fruits }: Props) {
  return (
    <div className="h-full overflow-x-auto mt-4 rounded-xl bg-base-200">
      <table className="table table-sm table-pin-rows table-pin-cols">
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

export default FruitSingleList;
