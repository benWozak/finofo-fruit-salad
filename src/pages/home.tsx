import React from "react";
import { FruitList } from "../FruitList";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-base-300 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Fruit Inventory</h2>
        <FruitList />
      </div>
      <div className="divider lg:divider-horizontal"></div>
      <div className="w-1/2 bg-base-300 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Fruit Jar</h2>
        <p>Right side content</p>
      </div>
    </div>
  );
};

export default Home;
