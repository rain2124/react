import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom/client';
import InputForm from './components/InputForm.tsx';
import SelectBox from './components/SelectBox.tsx';
import TodoLists from './components/TodoLists.tsx';
import './App.css';

type Todo = {
  id: number;
  title: string;
  status: string;
};

const App = () => {
  // const [todolists, settodolists] = useState<Lists>([]);
  const [todolists, settodolists] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [filter, setFilter] = useState('all')
  const [filterLists, setFilterLists] = useState([]);

  // リストタイトル置換
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  // ステータス変更
  // const handleStatusChange = (e) => {
  //   setValue(e.target.value);
  // };
  const handleSetfilter = (e) => {
    setFilter(e.target.value);
  };
  // 追加
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...todolists, todoText];
    settodolists(newTodos);
    setTodoText('');
  };
  // 削除
  const onClickDelete = (index) => {
    const newTodos = [...todolists];
    newTodos.splice(index, 1);
    settodolists(newTodos);
  }

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        // case 'notStarted':
        //   setFilterLists(todolists.filter((list) => value === 'notStarted'))
        //   break
        // case 'inProgress':
        //   setFilterLists(todolists.filter((list) => value === 'inProgress'))
        //   break
        // case 'done':
        //   setFilterLists(todolists.filter((list) => value === 'done'))
        //   break
        default:
          setFilterLists(todolists)
      }
    }
    filteringTodos()
  }, [filter, todolists])

  return (
    <>
    <div className="wrapper">
      <div className="inner">
        <InputForm
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAdd}
        />
        <SelectBox
          filter={filter}
          onChange={handleSetfilter}
        />
        <h1>追加リスト</h1>
        <TodoLists
          filterLists={filterLists}
          onClickDelete={onClickDelete}
        />
      </div>
    </div>
    </>
  );
}
export default App;
