import React from "react";
import { useFruitStore } from "../../store/fruitStore";

export default function FruitJar() {
  const { fruitJar, removeFruit, clearJar } = useFruitStore();

  return (
    <div className="bg-base-200 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fruit Jar</h2>
      {fruitJar.length === 0 ? (
        <p>Your fruit jar is empty.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {fruitJar.map((fruit) => (
              <li key={fruit.id} className="flex justify-between items-center">
                <span>
                  {fruit.name} x{fruit.quantity}
                </span>
                <button
                  onClick={() => removeFruit(fruit.id)}
                  className="btn btn-sm btn-error"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={clearJar} className="btn btn-warning mt-4">
            Clear Jar
          </button>
        </>
      )}
    </div>
  );
}
