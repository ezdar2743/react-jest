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
      <input
        type={"checkbox"}
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      ></input>
    </>
  );
};

export default App;
