import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "Title1",
    content: "Content1",
  },
  {
    title: "Title2",
    content: "Content2",
  },
  {
    title: "Title3",
    content: "Content3",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
