// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // console.log(`배열 인덱스 ${arr[i]}`);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i]);
}

// 1.2 for of 반복문
console.log('------- 1.2 for of 반복문 (배열만을 위해 존재 : 배열만 순회) -------');
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: '샤일로',
  age: 12,
  hobby: '꼬물꼬물',
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
console.log('------- 2.1 Object.keys 사용 -------');
let keys = Object.keys(person);
console.log(keys);

for (let key of keys) {
  const value = person[key];
  console.log(key);
  console.log(value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
console.log('------- 2.2 Object.values -------');
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in
//  -> 객체만을 위해 존재
console.log('------- 2.3 for in (객체만을 위해 존재 : 객체만 순회) -------');
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
