import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todo, onDelete, onUpdate, onComplete }) {
  const [search, setSearch] = useState("");

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  function getSearchResult() {
    return search === "" ? todo : todo.filter((item) => item.content.includes(search));
  }

  return (
    <div className="TodoList">
      <input
        className="searchbar"
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <div>
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onComplete={onComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
