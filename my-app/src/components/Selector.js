import React, { useState } from "react";

const Selector = (props) => {
  const numberInput = document.querySelector("#numberSelector");
  let numberVal = numberInput.value;
  const [total, setTotal] = useState(0);
  props.totalGetter(total);

  return (
    <>
      <input
        onInput={() => setTotal({ numberVal })}
        type="number"
        id="numberSelector"
        min="1"
        max="998"
        className="border-solid border-white text-xl"
      ></input>
    </>
  );
};

export default Selector;
