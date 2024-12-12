import React from 'react';

const TodoLists = (props) => {
  const { filteredTodos, handleStatusChange, handleOpenEditForm, handleDeleteTodo} = props;
  return (
    <ul>
      { filteredTodos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <select
            value={todo.status}
            onChange={(e) => handleStatusChange(todo, e)}
          >
            <option value="notStarted">未着手</option>
            <option value="inProgress">作業中</option>
            <option value="done">完了</option>
          </select>
          <button onClick={() => handleOpenEditForm(todo)}>編集</button>
          <button onClick={() => handleDeleteTodo(todo)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;