import "./App.css";
import { useReducer  } from "react";

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked);
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked}></input>
      <label>{checked ? "Checked": "not checked"}</label>
    </div>
  );
}

export default App;
