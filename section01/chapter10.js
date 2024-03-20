// 반복문
// 초기식; 조건식; 증감식
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 아래는 실행이 안되고 위 반복문 조건으로 다시 실행됨.
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
