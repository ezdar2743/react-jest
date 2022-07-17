import { useState } from "react";

export const replaceCamelWithSpace = (colorName: string) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

console.log(replaceCamelWithSpace("RedSpdidi"));
const App = () => {
  const [colorBtn, setColorBtn] = useState("red");

  const [disabled, setDisabled] = useState(false);
  const isColor = colorBtn === "red" ? "blue" : "red";
  const changeColor = () => {
    setColorBtn(isColor);
  };

  return (
    <>
      <button
        onClick={changeColor}
        style={{ backgroundColor: disabled ? "gray" : colorBtn }}
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
