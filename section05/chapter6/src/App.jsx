import './App.css';
import { useState } from 'react';

function App() {
  // 배열을 반환. 첫번째 값은 초기값, 두번째 값은 상태변화함수
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === 'ON' ? 'OFF' : 'ON');
          }}
        >
          {light === 'ON' ? '끄기' : '켜기'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
