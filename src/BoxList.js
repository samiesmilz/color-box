import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import Box from "./Box";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]); // Manage state for boxes

  const addBox = ({ width, height, color, id }) => {
    setBoxes(() => [...boxes, { width, height, color, id }]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="BoxList">
      <h3>Welcome to BoxList</h3>
      <NewBoxForm addBox={addBox} />
      {boxes.map(({ width, height, color, id }) => (
        <Box
          width={width}
          height={height}
          color={color}
          id={id}
          key={id}
          handleRemove={removeBox}
        />
      ))}
      <p className="BoxList-Tracker">
        Tracker: {boxes.length} boxes have been added.
      </p>
    </div>
  );
};
export default BoxList;
