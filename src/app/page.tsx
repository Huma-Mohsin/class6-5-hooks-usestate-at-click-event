"use client";
import { useState } from "react";

export default function Home() {
  let [count, setCount] = useState(0); // This is the way to write useState hook, it updates the value of count at every click.
  // Here count is a state, its value must be 0, then at click it changes 0 to 1, again click 1 to 2, and so on.
  // useState refreshes and reloads the component.

  return (
    <div style={{ fontSize: 25 }}>
      <h1 className="text-center p-10 text-green-500 underline">Learning useState Hook</h1>
      <br />
      <p className="text-red-600 text-center">
        What is useState?
        <br />
        <br />
        useState is a React hook used to create a piece of state within a functional component. <br />
        When you call useState, you pass an initial value (the "starting" state) and it returns two things:<br />
        1 - The current state value.<br />
        2 - A function to update that state.
        <br />
        <br />
        Why is useState used?
        <br />
        <br />
        To manage component data: useState allows you to create a variable that React watches. When the state changes, React re-renders the component, updating the UI automatically.
        <br />
        To add interactivity: With useState, you can create features like toggling content, updating counters, handling form inputs, and more.
        <br />
        Simplifies data flow: It enables components to "remember" the state even after user interactions, ensuring data remains consistent.
      </p>
      <br />
      <br />
      <div className="flex justify-center"> {/* Flex container to center the button */}
        <h1 className="text-center p-10 text-blue-500" >Count-Number:{count} </h1>  {/**Count change at serversite */}
        <button
          className="bg-blue-500 text-lg rounded text-white px-4 py-2 hover:bg-blue-700"
          onClick={() => {
            setCount(count + 1);
            console.log("Button Clicked Events", count);
          }}
        >
          Click Me, State changes at Server Side
        </button>
      </div>
    </div>
  );
}
