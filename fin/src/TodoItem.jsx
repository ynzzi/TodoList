import React, { useState } from "react";

function TodoItem({ id, isDone, content, onDelete, onUpdate, onComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);

  function onClickEdit() {
    setIsEditing(true);
  }

  function onCancelEdit() {
    setIsEditing(false);
    setEditContent(content);
  }

  function onSaveEdit() {
    onUpdate(id, editContent);
    setIsEditing(false);
  }

  function onChangeCheckbox() {
    onComplete(id, !isDone);
  }

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      {isEditing ? (
        <div className="editMode">
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <button onClick={onSaveEdit}>저장</button>
          <button onClick={onCancelEdit}>취소</button>
        </div>
      ) : (
        <div className="Todo">{content}</div>
      )}
      {!isEditing && (
        <div className="btn">
          <button onClick={onClickEdit}>수정</button>
          <button onClick={() => onDelete(id)}>삭제</button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
