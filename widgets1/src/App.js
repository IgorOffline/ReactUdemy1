import React from "react";
//import Accordion from "./components/Accordion";
//<Accordion items={items} />
import Search from "./components/Search";

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
      <Search />
    </div>
  );
};

export default App;
