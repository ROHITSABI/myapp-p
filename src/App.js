import { useState } from "react";

function App() {
  let clickMe1 = () => {
    console.log("Hello");
  };
  let clickMe2 = (e) => {
    console.log(e);
  };

  let clickMe3 = (p1) => {
    console.log(p1);
  };
  return (
    <div>
      <h1>Btn Click Demo</h1>
      <input type="button" value="Click Me1" onClick={clickMe1} />
      <input type="button" value="Click Me2" onClick={clickMe2} />
      <input
        type="button"
        value="Click Me3"
        onClick={() => clickMe3("primary")}
      />
    </div>
  );
}

export default App;
