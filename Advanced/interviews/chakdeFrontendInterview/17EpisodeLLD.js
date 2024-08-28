//www.youtube.com/watch?v=QWTpAsCDoy8&list=PL4CFloQ4GGWIXCJJHwT6FPb5yVZcybuQW&index=15

import React, { ReactElement, useState } from "react";

const Toast = ({ text, onClose }) => {
  return (
    <div>
      <p>{text}</p>
      <button onClick={onClose}>X</button>
    </div>
  );
};
const solution = () => {
  const [toastVisible, setToastVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setToastVisible(true)}>Show Toast</button>
      <Toast text={"I am Toast"} onClose={() => setToastVisible(false)} />
    </div>
  );
};

export default solution;
