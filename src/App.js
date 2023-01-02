function App() {
  let count = 100;
  let increment = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <h1>{count}</h1>
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}
export default App;
