import { useState } from "react";
import axios from "axios";

function App() {
  let [title] = useState("API");
  let [messageList, setMessageList] = useState([]);

  let getAllMessages = async () => {
    let url = "http://localhost/3001/mesages";
    let response = await axios.get(url);
    messageList = [...response.data];
    setMessageList(messageList);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="button"
        value="Make AJAX/API Call"
        onClick={getAllMessages}
      />
      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
