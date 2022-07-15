import { useState } from "react";

const App = () => {
  const [colorBtn, setColorBtn] = useState("red");
  const isColor = colorBtn === "red" ? "blue" : "red";
  const changeColor = () => {
    setColorBtn(isColor);
  };
  console.log(colorBtn);
  return (
    <>
      <button onClick={changeColor} style={{ backgroundColor: colorBtn }}>
        Change to {isColor}
      </button>
    </>
  );
};

export default App;
