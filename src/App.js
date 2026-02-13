import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      {/* state는 각 컴포넌트 별로 관리가 됨 */}
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
