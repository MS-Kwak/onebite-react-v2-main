// 1. 상수 객체
// 저장되어 있는 객체의 프로퍼티를 추가/변경 하는 건 가능하다!
const animal = {
  type: '고양이',
  name: '나비',
  color: 'black',
};

animal.age = 2; // 추가
animal.name = '까망이'; // 수정
delete animal.color; // 삭제

console.log(`animal : ${animal}`);
console.log('animal :', animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: '이정환',
  sayHello: () => {
    console.log('헬로~!');
  }, // 메서드 선언
  sayHi() {
    console.log('안녕!');
  },
};

person.sayHello();
person.sayHi();
person['sayHi']();
