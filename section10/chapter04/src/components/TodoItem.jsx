import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// App.jsx useCallback으로 대체
// 고차 컴포넌트 (HOC)
// export default memo(TodoItem); 만 하면 App 컴포넌트 안에 모든 객체가 리렌더링 되어버리므로
// 2번째 인자로 커스터마이징 해줌.
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
