import { useState } from "react";

const App = () => {
  const [colorBtn, setColorBtn] = useState("red");
  const isColor = colorBtn === "red" ? "blue" : "red";
  const changeColor = () => {
    setColorBtn(isColor);
  };
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <button
        onClick={changeColor}
        style={{ backgroundColor: colorBtn }}
        disabled={disabled}
      >
        Change to {isColor}
      </button>
      <label htmlFor="disabled button">disabled button</label>
      <input
        type={"checkbox"}
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        id="disabled button"
      ></input>
    </>
  );
};

export default App;
