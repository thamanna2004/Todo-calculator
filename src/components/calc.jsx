import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const buttons = [
    "C",
    "+-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input));
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-10  items-center justify-center">
      <div className="text-center ">
       {/* Header */}
<div className="text-center ">
  <h1 className="text-5xl font-bold text-white tracking-tighter mb-3 flex items-center justify-center gap-3">
    🌌 Nebula Calc
  </h1>
  
  <p className="text-gray-300 text-xl flex items-center justify-center gap-4 flex-wrap">
    ✨ Sleek 
    🌀 Smooth 
    ⚡ Powerful
  </p>
</div>
      </div>
      <div className="bg-blue-900 p-4 rounded-xl shadow-xl w-72">
        <div className="bg-blue-800 text-white text-5xl text-right p-4  rounded-lg mb-4 overflow-x-auto">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`p-4 rounded-lg text-2xl text-green ${btn === "=" ? "col-span-2 bg-orange-400" : "bg-purple-200"} `}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
