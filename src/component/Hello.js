import World from '../component/World'
import styles from "./Hello.module.css"

const Hello = () => {
  return (
    <div>
      <h1 style={{
        color: "#ff0",
        borderRight : "12px solid #000",
        marginBottom: "50px",
        opacity: 1,
      }}>Hello</h1>
      <div className={styles.box}>Hello</div>
    </div>
  );
};

export default Hello;