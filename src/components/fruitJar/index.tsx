import React, { useState } from "react";
import { useFruitStore } from "../../store/fruitStore";
import FruitChart from "./FruitChart";
import { X } from "lucide-react";

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
    <div className="h-full p-4 rounded-lg">
      {fruitJar.length === 0 ? (
        <p>Your fruit jar is empty.</p>
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
              showChart ? "h-48" : "h-4/5"
            } overflow-scroll p-4 bg-base-200 rounded-xl`}
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
            <p className="px-4 text-sm text-bold">
              Total types of fruit: {fruitJar.length}
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
