import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useReducer, useRef, createContext, useEffect, useState } from 'react';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
// import { getEmotionImage } from './util/get-emotion-images';
// import Button from './components/Button';
// import Header from './components/Header';

// localStorage.setItem을 추가하였으므로 더이상 필요가 없음.
// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date('2025-04-23').getTime(),
//     emotionId: 1,
//     content: '1번 일기내용',
//   },
//   {
//     id: 2,
//     createdDate: new Date('2025-04-22').getTime(),
//     emotionId: 2,
//     content: '2번 일기내용',
//   },
//   {
//     id: 3,
//     createdDate: new Date('2025-03-19').getTime(),
//     emotionId: 3,
//     content: '3번 일기내용',
//   },
// ];

// reducer: 변환기
// 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case 'INIT': {
      // INIT에서 action.data를 리턴하는 이유는 nextState와 이미 같은 값이므로!
      return action.data;
    }
    case 'CREATE': {
      nextState = [action.data, ...state];
      break;
    }
    case 'UPDATE': {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case 'DELETE': {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

// 데이터를 하위에 있는 컴포넌트로 공급하는 역할, 프롭스 드릴링 방지
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// Route path='*' 찍어주게 되면 '와일드카드' : switch case문의 디폴트 문과 비슷한거라고 생각하시면 되요~
function App() {
  // useEffect의 dispatch함수가 실행이되어서 데이터 스테이트의 초기값을 설정하는 순간 로딩이 끝이 나면 됩니다.
  const [isLoading, setIsLoading] = useState(true);

  // localStorage.setItem('test', 'hello');
  // // JSON.stringify로 객체를 문자열로 변환하지 않으면 개발자도구 > Application > Storage에서 확인할때 [Object object] 출력됨.
  // // localStorage의 key와 value값은 원시타입만 되기 때문 (숫자 또는 문자열)
  // localStorage.setItem('name', JSON.stringify({ name: '곽민서' }));
  // console.log(localStorage.getItem('test'));
  // // localStorage.getItem에서 name의 value값이 undefined이면 오류가 발생하므로 주의!!
  // console.log(JSON.parse(localStorage.getItem('name')));
  // localStorage.removeItem('test');
  // localStorage.removeItem('name');

  // 이벤트 헨들러 함수 안에서 특정 조건에 따라서 페이지를 이동할때 useNavigate 훅을 사용
  // const nav = useNavigate();
  // const onClickButton = () => {
  //   nav('/new');
  // };

  // dispatch: 발송하다, 급송하다.
  // 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // const [data, dispatch] = useReducer(reducer, mockData);
  // const idRef = useRef(3); // mockData에 id가 2번까지 있으므로, 겹치면 안되서 3으로 초기값을 설정
  const [data, dispatch] = useReducer(reducer, []);
  // localStorge에 저장된 id중에 가장 높은값에서 1을 더한값이어야 겹치지 않는다!!
  const idRef = useRef(0);

  // 빈배열: 컴포넌트가 마운트 되었을때 딱 한번만 실행
  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    // localStorage.getItem에서 storedData값이 undefined이면 오류가 발생하므로
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    // console.log(parsedData);
    // 아래 forEach이 parsedData가 배열이 아니면 오류가 발생하므로
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    // console.log(maxId);
    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능: dispatch로 action객체 전달
    // dispatch 인수 - 상태가 어떻게 변화되길 원하는지 그 정보를 전달: 액션 객체라고 한다
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }

  return (
    <>
      {/* <Header
        title={'Header'}
        leftChild={<Button text={'left'} />}
        rightChild={<Button text={'right'} />}
      />
      <Button
        text={'123'}
        type={'DEFAULT'}
        onClick={() => {
          console.log('버튼 클릭!!');
        }}
      />
      <Button
        text={'123'}
        type={'POSITIVE'}
        onClick={() => {
          console.log('버튼 클릭!!');
        }}
      />
      <Button
        text={'123'}
        type={'NEGATIVE'}
        onClick={() => {
          console.log('버튼 클릭!!');
        }}
      /> */}
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/diary'}>Diary</Link>
        <Link to={'/new'}>New</Link>
      </div> */}
      {/* 로그인, 회원가입 등을 할때 사용 */}
      {/* <button onClick={onClickButton}>New 페이지로 이동</button> */}

      {/* <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, 'Hello');
        }}
      >
        일기 추가 테스트
      </button>

      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, '수정된 일기 입니다');
        }}
      >
        일기 수정 테스트
      </button>

      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        일기 삭제 테스트
      </button> */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* /:id 동적 파라미터를 의미하는 url값 */}
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
