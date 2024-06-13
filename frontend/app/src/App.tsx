import React from "react";

function App() {
  interface User {
    name: string;
    age: number;
  }

  const user: User = {
    name: "James",
    age: 30,
  };

  return (
    <div className="text-3xl font-bold">
      <h1>Hello World</h1>
      <h1>My name is {user.name}</h1>
      <h1>My age is {user.age}</h1>
    </div>
  );
}

export default App;
