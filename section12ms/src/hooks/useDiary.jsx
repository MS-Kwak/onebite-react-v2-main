import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';

// 함수이름앞에 use가 붙게 되면 커스텀 hook이 된다.
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));

    if (!currentDiaryItem) {
      alert('존재하지 않는 일기입니다!');
      // 렌더링 마운트가 된 후 동작해야하므로 useEffect 사용해야함.
      nav('/', { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
};

export default useDiary;
