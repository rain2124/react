import { useEffect, useState } from 'react';
import './App.css';

// 型宣言
export type TTodo = {
  id: number,
  title: string,
  status: string,
};
export type Filter = 'all' | 'notStarted' | 'inProgress' | 'done';
// 初期配列
const initialTodos : TTodo[] = [];

export const App = () => {
  const [todos, setTodos] = useState<TTodo[]>(initialTodos);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoId, setTodoId] = useState<number>(todos.length + 1);
  const [newTitle, setNewTitle] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [isEditable, setIsEditable] = useState(false);

  // typescript の各種イベント
  // <input>	React.ChangeEvent<HTMLInputElement>
  // <textarea>	React.ChangeEvent<HTMLTextAreaElement>
  // <select>	React.ChangeEvent<HTMLSelectElement>
  
  // input
  const handleAddFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };
  // 削除
  const handleDeleteTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  // 追加
  const handleAddTodo = () => {
    if (todoTitle === '') return;
    const newTodo: TTodo = {
      id: todoId,
      title: todoTitle,
      status: 'notStarted'
    }
    setTodos([...todos,newTodo]);
    setTodoId(todoId + 1);
    setTodoTitle('');
  }
  // editのタイトルをsetする
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  }
  // editイベント
  const handleOpenEditForm = (todoId: number) => {
    const findTodo = todos.find((todo) => todo.id === todoId)
    if (!findTodo) return;
    setIsEditable(true);
    setEditId(findTodo.id);
    setNewTitle(findTodo.title);
  }
  const handleCloseEditForm = () => {
    setIsEditable(false);
    setEditId(null);
  }
  const handleEditTodo = () => {
    const newArray: TTodo[] = todos.map((todo) =>
      todo.id === editId ? { ...todo, title: newTitle } : todo
    )
    setTodos(newArray)
    setNewTitle('')
    setEditId(null)
    handleCloseEditForm()
  }
  return (
    <>
      <div>
        {isEditable}
        <input
          type='text'
          placeholder='新規タイトル'
          value={todoTitle}
          onChange={handleAddFormChange}
        />
        <button onClick={handleAddTodo}>追加</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <select value={todo.status}>
              <option value='notStarted'>未着手</option>
              <option value='inProgress'>作業中</option>
              <option value='done'>完了</option>
            </select>
            <button onClick={()=>handleOpenEditForm(todo.id)}>編集</button>
            <button onClick={()=>handleDeleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;



