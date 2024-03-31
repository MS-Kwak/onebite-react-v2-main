const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    // 합성 이벤트 객체
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
