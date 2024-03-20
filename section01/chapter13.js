// 1. 콜백함수: 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미함
// 콜백이란 나중에 실행되는 의미
function main(value) {
  console.log('start');
  value();
  console.log('end');
}

main(() => {
  console.log('i am sub');
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    // console.log(idx);
    callback(idx);
  }
}

// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

repeat(5, (idx) => {
  console.log(idx);
});

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

repeat(5, (idx) => {
  console.log(idx * 2);
});

// function repeatTriple(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

repeat(5, (idx) => {
  console.log(idx * 3);
});
