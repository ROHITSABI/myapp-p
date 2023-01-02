function App() {
  let project = "Counter Application";
  let btnValue = "Click Me";

  let clickMe = () => alert();

  return (
    <div>
      <h1>{project}</h1>
      <input type="button" value={btnValue} onClick={clickMe} />
    </div>
  );
}
export default App;
