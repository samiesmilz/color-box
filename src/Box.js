import React from "react";
import "./Box.css";

const Box = ({ width, height, color, id, handleRemove }) => {
  const remove = () => {
    handleRemove(id);
  };
  return (
    <div className="Box">
      <p className="Box-label">
        This is a box with width of {width}px and height of {height}px with
        color - {color}.
      </p>
      <div
        className="Box-color"
        style={{
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <button onClick={remove}> ❇️X </button>
      </div>
    </div>
  );
};

export default Box;
