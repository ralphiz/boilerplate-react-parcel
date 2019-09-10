import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex m-10">
        <div className="w-1/4 bg-gray-400 h-12" />
        <div className="w-1/2 bg-gray-500 h-12">
          <h1>This is the Home component.</h1>
          <Card />
          <div>
            <form className="m-4 flex">
              <input className="rounded-1-1g p-4 border-t mr-0 border-b border-l text-gray-darker border-gray-200 bg-white" />
              <button className="px-8 rounded-r-lg bg-green-light text-gray-darker font-bold p-4 uppercase border-green-dark">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="w-1/4 bg-gray-400 h-12" />
      </div>
    </div>
  );
};

export default Home;
