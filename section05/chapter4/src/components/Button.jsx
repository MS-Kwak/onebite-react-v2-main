const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color?.toUpperCase()}
      {children}
    </button>
  );
};

// 올해말 즈음 새롭게 공개될 React 19 버전부터는 defaultProps의 사용이 중지됩니다.
// 이에 현재 수강하고 계신 분들께는 경고 메세지가 출력될 수 있습니다. (지금은 무시하셔도 괜찮습니다)
// 19 버전이 정식으로 업데이트 되고 나면 다음과 같이 defaultProps를 대체하실 수 있습니다.
// const App = ( {data = '기본값} ) => { ... }
Button.defaultProps = {
  color: 'black',
};

export default Button;
