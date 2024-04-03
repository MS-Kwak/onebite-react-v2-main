import { useEffect } from 'react';

const Even = () => {
  // 3. 언마운트 : 죽음
  useEffect(() => {
    // useEffect가 반환하는 콜백함수는 클린업, 정리함수라 한다
    // 이 콜백함수는 useEffect가 끝날 때(unmount될때) 실행이 됩니다.
    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>짝수입니다</div>;
};

export default Even;
