import { useState } from "react";

const App = () => {
  const [checked, setChecked] = useState(false);
  const onClick = (e: any) => {
    setChecked((pre) => !pre);
  };
  return (
    <div>
      {checked ? <button disabled>btn</button> : <button>btn</button>}
      <input type="checkbox" onChange={onClick} />
    </div>
  );
};

export default App;
