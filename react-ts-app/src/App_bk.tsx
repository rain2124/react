import { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import TodoLists from './components/TodoLists';
import './App.css';

export type TTodo = {
  id: number;
  title: string;
  status: string;
};

// 初期リスト
const initialTodos: TTodo[] = [];
type Filter = 'all' | 'notStarted' | 'inProgress' | 'done';
export const App = () => {
  const [todos, setTodos] = useState<TTodo[]>(initialTodos);
  // todosはTodo型の配列に指定 (initialTodos)にて初期値を設定。 10行目のconstにリスト追加すれば初期値が表示
  const [todoTitle, setTodoTitle] = useState('');
  const [todoId, setTodoId] = useState<number>(todos.length + 1);
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [filteredTodos, setFilteredTodos] = useState<TTodo[]>([]);

  // typescript の各種イベント
  // <input>	React.ChangeEvent<HTMLInputElement>
  // <textarea>	React.ChangeEvent<HTMLTextAreaElement>
  // <select>	React.ChangeEvent<HTMLSelectElement>

  // input 入力欄取得
  const handleAddFormChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  // input todo追加
  const handleAddTodo = () => {
    if (todoTitle === '') return;
    const newTodo: TTodo = {
      id: todoId,
      title: todoTitle,
      status: 'notStarted',
    };
    setTodos([...todos, newTodo]);
    setTodoId(todoId + 1);

    // input 入力欄リセット
    setTodoTitle('')
  }
  // 削除
  const handleDeleteTodo = (todoId: number) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }
  // editイベント
  const handleOpenEditForm = (todoId: number) => {
    const findTodo = todos.find((todo) => todo.id === todoId)
    if (!findTodo) return;
    setIsEditable(true);
    setEditId(findTodo.id);
    setNewTitle(findTodo.title);
  }
  // editのタイトルをsetする
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
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


  // 出力
  return (
    <>
      <InputForm
        label={!isEditable ? 'タイトル' : '新しいタイトル'}
        value={!isEditable ? todoTitle : newTitle}
        onChange={!isEditable ? handleAddFormChanges : handleEditFormChange}
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

      <TodoLists
        filteredTodos={filteredTodos}
        handleStatusChange={handleStatusChange}
        handleOpenEditForm={handleOpenEditForm}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  )
};

export default App;
