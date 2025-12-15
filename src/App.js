import {useState} from "react";
import SvList from "./componants/SvList";

function App() {
  const [count, setcount]=useState(0)
  const students = [
    { id: 1, name: "loc tran huu", age: 19 },
    { id: 2, name: "loc tran ", age: 19 },
    { id: 3, name: "loc ", age: 17 },
    { id: 4, name: " tran huu", age: 59 },
  ];

  return (
  
    <div>
      <SvList students={students}  setcount={setcount}/>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default App;
