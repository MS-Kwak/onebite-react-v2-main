import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { replace, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle('새 일기 쓰기');

  // 일기 수정하기 업데이트를 위한 함수
  const onSubmit = (input) => {
    // nput.createdDate.getTime() <- 타임스탬프 형식으로 업데이트 하기 위해
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);

    // 수정 완료하면 홈으로 이동, replace 옵션을 true로 하면 뒤로가기 방지
    nav('/', { replace: true });
  };

  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        // -1은 페이지를 뒤로 이동
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
