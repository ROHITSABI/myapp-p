import { useState } from "react";

function App() {
  let str1 = "Home";
  let str2 = "Explore";
  let str3 = "Notification";

  let [city, setCity] = useState("Mumbai");
  let changeCity = () => {
    city = `Hello` + city;

    setCity(city);
  };

  return (
    <div>
      <h1>{str1}</h1>
      <h1>{str2}</h1>
      <h1>{str3}</h1>
      <h1>{city}</h1>
      <input type="button" value="Change City" onClick={changeCity} />
    </div>
  );
}
export default App;
