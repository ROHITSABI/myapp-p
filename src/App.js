import { useState } from "react";

function App() {
  let title = "Map Demo";
  let [list, setList] = useState([]);

  let addItemIntoList = () => {
    let newList = [...list, "Navi Mumbai"];

    setList(newList);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="button"
        value="Add Item Into List"
        onClick={addItemIntoList}
      />
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
export default App;
