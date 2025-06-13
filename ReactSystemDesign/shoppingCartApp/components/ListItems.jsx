import React from "react";

function ListItems({ items, transferfn }) {
  console.log("items is", items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => transferfn(item)}>Add</button>
        </li>
      ))}
    </ul>
  );
}

export default ListItems;
