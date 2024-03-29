import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex justify-around pt-5">
          <button
            onClick={() => setColor("red")}
            className="text-white border-2 p-1 w-32 rounded-md text-center  bg-red-500"
          >
            RED
          </button>

          <button
            onClick={() => setColor("green")}
            className="text-white bg-pink border-2 p-1 w-32 rounded-md text-center bg-green-800"
          >
            GREEN
          </button>

          <button
            onClick={() => setColor("black")}
            className="text-white border-2 p-1  w-32 rounded-md text-center  bg-black"
          >
            BLACK
          </button>

          <button
            onClick={() => setColor("pink")}
            className="text-white border-2 p-1 w-32 rounded-md text-center  bg-pink-500"
          >
            PINK
          </button>
          <button
            onClick={() => setColor("orange")}
            className="text-white border-2 p-1 w-32 rounded-md text-center  bg-orange-500"
          >
            ORANGE
          </button>
          <button
            onClickCapture={() => setColor("yellow")}
            className="text-white border-2 p-1 w-32 rounded-md text-center  bg-yellow-500"
          >
            YELLOW
          </button>
          <button
            onClick={() => setColor("blue")}
            className="text-white border-2 p-1 w-32 rounded-md text-center  bg-blue-500"
          >
            BLUE
          </button>

        
        </div>
      </div>
    </div>
  );
}
