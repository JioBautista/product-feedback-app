import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="text-3xl font-bold">
      <h1>Hello World</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(1)}>Add</button>
    </div>
  );
}

export default App;
