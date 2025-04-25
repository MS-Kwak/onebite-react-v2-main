// import { useSearchParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

// 이번달에 해당하는 일기 데이터만 추출
const getMonthlyData = (pivotDate, data) => {
  // 시작날: 1일 0시 0분 0초 | 마지막날: 이번달의 0일 23시 59분 59초
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  // http://localhost:5173/?value=hello
  // const [params, setParams] = useSearchParams();
  // console.log(params.get('value'));

  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);
  // console.log('monthlyData :', monthlyData);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
        rightChild={<Button onClick={onIncreaseMonth} text={'>'} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
