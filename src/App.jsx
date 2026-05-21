
import { useState } from "react" ;
import { useEffect } from "react";

function App(){
   const [todos, setApps] = useState(() =>{
    const savedApps = localStorage.getItem("todos");
    if(savedApps){
      return JSON.parse(savedApps);
    }
    return[];
   });
   const [input, setInput] = useState("");
   const [editId, setEditId] = useState(null);

   const addApp = () => {
  if (!input.trim()) return;

  if (editId !== null) {

    const updatedApps = todos.map((todo) =>
      todo.id === editId
        ? { ...todo, text: input }
        : todo
    );

    setApps(updatedApps);

    setEditId(null);

  } else {

    setApps([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false
      }
    ]);
  }

  setInput("");
};
   useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
   },[todos]);

   const resetApps = () => {
    setApps([]);
   };
   const handleEdit = (todo) => {
  setInput(todo.text);
  setEditId(todo.id);
};

  return( 

    <div className="min-h-screen flex items-center
     justify-center bg-gradient-to-r from-blue-600 to- bg-emerald-400 " >

      <div className="bg-white shadow-lg rounded-3xl pt-0 pl-10 pb-10 pr-2">

        <div className="flex justify-end items-center mb-4">
        <button onClick={resetApps}
        className="text-black hover:text-red-700 text-2xl"> ↺</button>
         </div> 

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">REACT TODO LIST </h1>
        <div className="mb-3 flex">
          <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter"){
              addApp();
            }
          }}
           type="text" placeholder="Add a new todo" className="flex-:grow px-3 py-2 border
          rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button
          onClick={addApp}
           className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">Add</button>

        </div>

        <ul className="space-y-2">
          {
            todos.map((todo) => (
              <li 
              key ={todo.id}
              className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200 ">

                <input type="checkbox" checked={todo.completed}  onChange={() => setApps(
                  todos.map((t) => (
                    t.id === todo.id ? {...t,completed:!t.completed} : t
                  ))
                )}
                className="mr-2 h-5 w-5 text-blue-600"
                />
                <span 
                className={`flex-grow ${todo.completed ? "line-through text-gray-500" :"text-gray-800"}`}>{todo.text}</span>
                <button
                onClick={()=> handleEdit(todo)} className="ml-2 p-2 rounded-lg bg-green-500 text-white hover:bg-green-600">edit</button>
                

                <button
                onClick ={() => setApps(todos.filter ((t) => t.id !== todo.id))}
                className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                >delete</button>

             </li>
            ))
          }

        </ul>


      </div>

    </div>
  );
}


export default App
