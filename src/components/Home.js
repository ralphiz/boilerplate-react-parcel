import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex m-10">
        <div className="w-1/4 bg-gray-400 h-12"></div>
        <div className="w-1/2 bg-gray-500 h-12">
          <h1>This is the Home component.</h1>
          <Card />
        </div>
        <div className="w-1/4 bg-gray-400 h-12"></div>
      </div>
    </div>
  );
};

export default Home;
