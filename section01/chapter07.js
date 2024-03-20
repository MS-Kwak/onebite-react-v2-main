// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;
console.log(`num6: ${num6}`);

// 3. 복합 대입 연산자 (산술+대입)
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
++num8; // 전위 연산: 해당 라인에서 바로 1이 증가
num8++; // 후위 연산: 라인이 끝나고 난 후 1이 증가
console.log(`num8: ${num8}`);

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자
let comp1 = 1 === '1'; // 값의 자료형까지 비교하기 위해 === 3번을 쓴다
console.log(comp1);
console.log((compare1 = 1 == '1'));
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
