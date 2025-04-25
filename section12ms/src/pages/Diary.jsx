import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import { getStringedDate } from '../util/get-stringed-date';

const Diary = () => {
  const params = useParams();
  // console.log(params);
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);
  // console.log(curDiaryItem);
  // useDiary의 useEffect가 화면이 렌더링(마운트)가 되었을때 반환되므로 console에 undefined가 한번 찍히므로 아래 코드가 필요함.
  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={'수정하기'} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
