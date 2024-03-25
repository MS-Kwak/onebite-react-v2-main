// math 모듈
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// es모듈시스템에서는 export 뒤에 객체를 리터럴로 생성시키면 되요~ commmonjs보다 더 간결해요~
// export { add, sub };
