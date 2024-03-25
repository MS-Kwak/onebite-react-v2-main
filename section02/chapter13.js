// 2.13) 비동기 작업 처리하기 2. Promise
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });

  return promise;
}

// then 메서드 (promise 작업이 서공했을때만 호출되는 메서드)
//  -> 그 후에
// then은 promise 객체 자체를 반환하기 때문에, catch 메서드를 연결시켜 사용할 수 있음
//  -> promise Chaing이라고 표현합니다
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
