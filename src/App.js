import './App.css';
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hello age={20}/>
      <Hello age={40}/>
      <Hello age={70}/>
    </div>
  );
}

export default App;
