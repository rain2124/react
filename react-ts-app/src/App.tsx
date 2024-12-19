import { useEffect, useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';

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
  const [filter, setFilter] = useState<Filter>('all');
  const [filteredTodos, setFilteredTodos] = useState<TTodo[]>([]);

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
  const handleStatusChange = (targetTodo: TTodo, e: React.ChangeEvent<HTMLSelectElement>) => {
    const newArray = todos.map((todo) =>
      todo.id === targetTodo.id ? { ...todo, status: e.target.value } : todo
    )
    setTodos(newArray)
  }
  // setFilter
  const handleSetfilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as Filter);
  }
  // useeffect
  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case 'notStarted':
          setFilteredTodos(todos.filter((todo) => todo.status === 'notStarted'))
          break
        case 'inProgress':
          setFilteredTodos(todos.filter((todo) => todo.status === 'inProgress'))
          break
        case 'done':
          setFilteredTodos(todos.filter((todo) => todo.status === 'done'))
          break
        default:
          setFilteredTodos(todos)
      }
    }
    filteringTodos()
  }, [filter, todos])
  return (
    <>
      {/* { !isEditable ? (
      <div>
        <input
          type='text'
          placeholder='新規タイトル'
          value={todoTitle}
          onChange={handleAddFormChange}
        />
        <button onClick={handleAddTodo}>追加</button>
      </div>
      ) : (
      <div>
        <input
          type="text"
          value={newTitle}
          onChange={handleEditFormChange}
        />
        <button onClick={handleEditTodo}>編集を保存</button>
        <button onClick={handleCloseEditForm}>キャンセル</button>
      </div>
      )} */}
      <InputForm
        label={!isEditable ? 'タイトル' : '新しいタイトル'}
        value={!isEditable ? todoTitle : newTitle}
        onChange={!isEditable ? handleAddFormChange : handleEditFormChange}
        buttonLabel1={!isEditable ? '作成' : '編集を保存'}
        buttonLabel2={!isEditable ? undefined : 'キャンセル'}
        onClick1={!isEditable ? handleAddTodo : handleEditTodo}
        onClick2={!isEditable ? undefined : handleCloseEditForm}
      />
      <select value={filter} onChange={handleSetfilter}>
        <option value="all">すべて</option>
        <option value="notStarted">未着手</option>
        <option value="inProgress">作業中</option>
        <option value="done">完了</option>
      </select>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <select
              value={todo.status}
              onChange={(e) => handleStatusChange(todo, e)}
            >
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



