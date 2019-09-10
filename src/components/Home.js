import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-column content-center">
        <h1>This is the Home component.</h1>
        <Card />
      </div>
    </div>
  );
};

export default Home;
