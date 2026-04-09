import { useState } from "react";

export default function Word({ word: initialWord }) {
  const [word, setWord] = useState(initialWord);
  const [isShow, setIsShow] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !word.isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setWord({ ...word, isDone: !word.isDone });
      }
    });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setIsDeleted(true);
        }
      });
    }
  }

  if (isDeleted) {
    return null;
  }

  return (
    <tr className={word.isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={word.isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보이기"}</button>
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
}
