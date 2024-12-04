import React from "react";

function BoxComponent({ boxItems, transferFn ,i,j}) {
  return (
    <div
      style={{ border: "1px solid black", minWidth: "150px", padding: "20px" }}
    >
      <h3>Box {i}</h3>
      {boxItems.map((item) => {
        return (
          <div
            key={item}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{item}</span>
            <button onClick={() => transferFn(item)}>Move to Box{j}</button>
          </div>
        );
      })}
    </div>
  );
}

export default BoxComponent;
