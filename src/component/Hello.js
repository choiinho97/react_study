import World from '../component/World'
import styles from "./Hello.module.css"
const Hello = () => {
  return (
    <div>
      <h1 style={
        {
          color: '#f00',
          border: '2px solid #000',
          marginBottom: '30px',
          opacity: 0.7,
        }
      }>Hello</h1>
      <div className={styles.box}>Hello</div>
    </div>
  );
};

export default Hello;