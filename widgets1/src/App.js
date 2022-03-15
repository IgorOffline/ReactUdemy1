import React, { useState } from "react";
//import Accordion from "./components/Accordion";
//<Accordion items={items} />
//import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  {
    label: "CRed",
    value: "red",
  },
  {
    label: "CGreen",
    value: "green",
  },
  {
    label: "CBlue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
