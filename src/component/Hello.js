import { useState } from "react";

const Hello = () => {
  // let name = "Mike"
  const [name, setName] = useState("Mike");
  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    // document.getElementById("name").innerText = name;
    setName(newName)
    console.log(name);
  }
  

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>Change</button>
      
    </div>
  );
};

export default Hello;