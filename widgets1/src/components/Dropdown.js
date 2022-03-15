import React, { useEffect, useRef, useState } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.remove("click", onBodyClick, { capture: true });
    };
  }, []);

  const options = props.options.map((option) => {
    if (option.value === props.selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => props.onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {options}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
