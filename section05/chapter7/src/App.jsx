import './App.css';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

// 리액트에서 리랜더링이 발생할 때 (불필요한 리렌더링은 성능을 악화시킨다)
// 1. 부모컴포넌트가 리렌더링 되면 자식컴포넌트도 리렌더링 되요
// 2. 자신이 관리하는 state의 값이 변경되었을때
// 3. 자신이 제공받는 props의 값이 변경되었을때

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
