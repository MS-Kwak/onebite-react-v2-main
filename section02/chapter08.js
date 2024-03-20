// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
console.log('------- 1. forEach -------');
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log('idx: ', idx, ' item: ', item);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log('doubledArr: ', doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
console.log('------- 2. includes -------');
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log('isInclude: ', isInclude);

// 3. indexOf (얕은 비교로 동작함)
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
console.log('------- 3. indexOf -------');
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2);
let index2 = arr3.indexOf(20);
console.log('index: ', index);
console.log('index2: ', index2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
console.log('------- 4. findIndex -------');

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);

console.log('findedIndex: ', findedIndex);

// 배열에서는 indexOf로 굳이 findIndex를 사용하지 않아도 되지만, 객체에서는 findIndex가 필요함.
let objectArr = [{ name: '샤일로' }, { name: '누벨' }];

console.log(objectArr.indexOf({ name: '샤일로' }));

console.log(
  objectArr.findIndex((item) => {
    return item.name === '샤일로';
  })
);
console.log(objectArr.findIndex((item) => item.name === '샤일로'));

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
console.log('------- 5. find -------');

let arr5 = [{ name: '샤일로' }, { name: '누벨' }];

const finded = arr5.find((item) => item.name === '샤일로');

console.log(finded);
