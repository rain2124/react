import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import InputForm from './components/InputForm.tsx';
import InputFormEdit from './components/InputFormEdit.tsx';
import TodoLists from './components/TodoLists.tsx';
import './App.css';

type Todo = {
  id: number;
  title: string;
  status: string;
};
// 初期リスト
const initialTodos: Todo[] = [];
type Filter = 'all' | 'notStarted' | 'inProgress' | 'done';
export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  // todosはTodo型の配列に指定 (initialTodos)にて初期値を設定。 10行目のconstにリスト追加すれば初期値が表示
  const [todoTitle, setTodoTitle] = useState('');
  const [todoId, setTodoId] = useState(todos.length + 1);
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [filter, setFilter] = useState<Filter>('notStarted');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  // typescript の各種イベント
  // <input>	React.ChangeEvent<HTMLInputElement>
  // <textarea>	React.ChangeEvent<HTMLTextAreaElement>
  // <select>	React.ChangeEvent<HTMLSelectElement>
  
  // input 入力欄取得
  const handleAddFormChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };
  // input 入力欄リセット
  const resetFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle('')
  }
  // input todo追加
  const handleAddTodo = () => {
    if (todoTitle === '') return;
    const newTodo: Todo = {
      id: todoId,
      title: todoTitle,
      status: 'notStarted',
    };
    setTodos([...todos, newTodo]);
    setTodoId(todoId + 1);
    resetFormInput('');
  }
  // 削除
  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo));
  }
  // editイベント
  const handleOpenEditForm = (todo) => {
    setIsEditable(true);
    setEditId(todo.id);
    setNewTitle(todo.title);
  }
  // editのタイトルをsetする
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  }
  const handleCloseEditForm = () => {
    setIsEditable(false);
    setEditId('');
  }
  const handleEditTodo = () => {
    const newArray = todos.map((todo) =>
      todo.id === editId ? { ...todo, title: newTitle } : todo
    )
    setTodos(newArray)
    setNewTitle('')
    setEditId()
    handleCloseEditForm()
  }
  const handleStatusChange = (targetTodo, e) => {
    const newArray = todos.map((todo) =>
      todo.id === targetTodo.id ? { ...todo, status: e.target.value } : todo
    )
    setTodos(newArray)
  }
  // setFilter
  const handleSetfilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
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
      { isEditable ? (
        <InputFormEdit 
          value={newTitle}
          onChange={handleEditFormChange}
          onClick={handleEditTodo}
          onClickCancel={handleCloseEditForm}
        />
      ) : (
        <InputForm 
          value={todoTitle}
          onChange={handleAddFormChanges}
          onClick={handleAddTodo}
          filter={filter}
          onChangeFilter={handleSetfilter}
        />
      )}
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