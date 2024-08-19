const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    // 합성 이벤트 객체 (Synthetic Base Event) : 크로스 브라우징 이슈에도 리액트는 자유롭게 사용할 수 있다!!
    console.log(e);
    console.log(text);
  };

  return (
    <button
      // 이벤트 핸들러
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'black',
};

export default Button;
