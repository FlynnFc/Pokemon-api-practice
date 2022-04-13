import React, { useState } from "react";

const Selector = (props) => {
  const [total, setTotal] = useState(30);
  props.totalGetter({ total });
  console.log(total);

  return (
    <>
      <input
        onInput={(e) => setTotal(e.target.value)}
        type="number"
        id="numberSelector"
        min="1"
        defaultValue="30"
        max="998"
        className="border-solid border-white text-xl"
      ></input>
    </>
  );
};

export default Selector;
