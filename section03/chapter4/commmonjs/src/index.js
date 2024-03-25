// const moduleData = require('./math');
// console.log(moduleData);

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 구조분해할당
const { add, sub } = require('./math');
// console.log(moduleData);

console.log(add(1, 2));
console.log(sub(1, 2));
