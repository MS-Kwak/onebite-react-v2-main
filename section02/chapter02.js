// 단락 평가: and 나 or 같은 논리 연산식에서 첫번째 피연산자의 값만으로도 해당 연산의 결과를 확정할 수 있다면, 그때에는 두번째 피연산자의 값에는 아예 접근하지 않는 그런 자바스크립트의 특징
// 단락 평가 활용 사례
// true || true (첫번째 true값 반환)
// true && true (두번째 true값 반환)

function printName(person) {
  // const name = person && person.name;
  const name = person?.name;

  console.log(name || 'person의 값이 없음');
}

printName();
printName({ name: '곽민서' });
