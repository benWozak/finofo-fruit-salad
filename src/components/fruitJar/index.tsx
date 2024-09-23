import React, { useState } from "react";
import { useFruitStore } from "../../store/fruitStore";
import FruitChart from "./FruitChart";
import { X } from "lucide-react";
import AddFruitButton from "../ui/AddFruitButton";

export default function FruitJar() {
  const { fruitJar, removeFruit, clearJar } = useFruitStore();
  const [showChart, setShowChart] = useState(true);

  const totalCalories = fruitJar.reduce(
    (sum, fruit) => sum + fruit.nutritions.calories * fruit.quantity,
    0
  );

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div className="h-full rounded-lg">
      {fruitJar.length === 0 ? (
        <div className="flex h-3/5 flex-col justify-center items-center text-center">
          <div className="max-w-96">
            <p className="text-bold text-2xl mb-4">Your fruit jar is empty</p>
            <p className="text-bold text-md">
              Select a fruit from the list by hitting the{" "}
              <AddFruitButton disabled /> from the panel and begin your fruit
              salad journey
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="collapse rounded-none">
            <input type="checkbox" checked={showChart} onChange={toggleChart} />
            <div className="collapse-title flex justify-between p-0">
              <p className="font-bold">
                Total Calories: {totalCalories.toFixed(0)}
              </p>
              <button onClick={toggleChart} className="btn btn-sm btn-neutral">
                {showChart ? "Hide" : "Show"} Chart
              </button>
            </div>
            <div className="collapse-content">
              <FruitChart data={fruitJar} />
            </div>
          </div>
          <div
            className={`${
              showChart ? "h-48" : "h-4/6"
            } overflow-auto p-4 bg-base-200 rounded-xl`}
          >
            <ul className="space-y-2">
              {fruitJar.map((fruit) => (
                <li
                  key={fruit.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span>
                    {fruit.name} x{fruit.quantity}
                  </span>
                  <button
                    onClick={() => removeFruit(fruit.id)}
                    className="btn btn-xs btn-outline rounded-full btn-error"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between">
            <p className="px-2 text-sm text-bold">
              Total fruit types included: {fruitJar.length}
            </p>
            <button onClick={clearJar} className="btn btn-warning mt-4">
              Clear Jar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
