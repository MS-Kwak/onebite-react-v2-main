// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
console.log('------- 1. filter -------');

let arr1 = [
  { name: '샤일로', hobby: '꼬물꼬물' },
  { name: '누벨', hobby: '날롱날롱' },
  { name: '곽민서', hobby: '꼬물꼬물' },
];

const cuteFriend = arr1.filter((item) => item.hobby === '꼬물꼬물');
console.log('cuteFriend: ', cuteFriend);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
console.log('------- 2. map -------');

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log('item: ', item);
  console.log('idx: ', idx);

  return item * 2;
});
console.log('mapResult1: ', mapResult1);

let names = arr1.map((item) => item.name);
console.log('names: ', names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드 (문자열, 숫자값 다름 / 원본 배열을 정렬)
console.log('------- 3. sort -------');
let arr33 = ['c', 'a', 'b'];
arr33.sort();
console.log('arr33: ', arr33);

// 오름차순 정렬 (내림차순 정렬은 반대로)
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log('arr3: ', arr3);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
console.log('------- 4. toSorted -------');

let arr5 = ['c', 'a', 'b'];
const sorted = arr5.toSorted();
console.log('arr5: ', arr5);
console.log('sorted: ', sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
console.log('------- 5. join -------');

let arr6 = ['hi', 'im', 'shiloh'];
const joined = arr6.join(' ');
console.log('joined: ', joined);
