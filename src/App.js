import { useState } from "react";

function App() {
  let [message, setMessage] = useState("Abc");
  let changeMessage = (e) => {
    message = e.target.value;

    setMessage(message);
  };

  return (
    <div>
      <h1>Working With Input</h1>
      <input type="text" value={message} onChange={changeMessage} />
      <h1>{message}</h1>
    </div>
  );
}

export default App;
