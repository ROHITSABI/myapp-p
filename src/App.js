import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("Primary");
  let primaryTheme = () => {
    theme = "primary";

    setTheme(theme);
  };

  return (
    <div>
      <h1 className={`bg-${theme} text-dark p-3`}>BootStrap Styling</h1>
      <input
        className="btn btn-primary"
        type="button"
        value="Primary Theme"
        onClick={primaryTheme}
      />
    </div>
  );
}
export default App;
