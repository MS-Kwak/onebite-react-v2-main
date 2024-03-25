// es모듈시스템을 이용할때는 .js확장자를 명시해줘야함.
import mul, { add, sub } from './math.js';

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 2));
