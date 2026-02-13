import { useState } from "react";
import Username from "./Username"

const Hello = ({age}) => {
  console.log({age})
  const [name, setName] = useState("Mike");
  const msg = age>19? "성인입니다." : "미성년자 입니다."

  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName)
  }
  

  return (
    <div>
      <h2 id="name">{name} : {msg}</h2>
      <Username name={name}/>
      <button onClick={changeName}>Change</button>
      
    </div>
  );
};

export default Hello;