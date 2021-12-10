import React, { useState } from "react";
import "./styles.css";

export default function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <HooksExample />
      <ExampleWithManyStates />
    </div>
  );
}

function HooksExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState Example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  // ...
  return (
    <div>
      <h1>Declaring multiple state variables</h1>
      <p>{"Number " + age}</p>
      <p>{"String " + fruit}</p>
      <p>{"Array " + todos[0].text}</p>
    </div>
  );
}
