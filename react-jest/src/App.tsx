import { useState } from "react";

const App = () => {
  const [checked, setChecked] = useState(false);
  const onClick = (e: any) => {
    setChecked((pre) => !pre);
  };
  return (
    <div>
      {checked ? <button disabled>btn</button> : <button>btn</button>}
      <input id="check-btn" type="checkbox" onChange={onClick} />
      <label htmlFor="check-btn">check</label>
    </div>
  );
};

export default App;
