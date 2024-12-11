import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom/client';
import InputForm from './components/InputForm';
import SelectBox from './components/SelectBox';
import AdditionalLists from './components/AdditionalLists';
import './App.css';

// const Lists = {
//   id: number,
//   title: string,
//   state: string,
// }

const App = () => {
  // const [additionalList, setAdditionalList] = useState<Lists>([]);
  const [additionalList, setAdditionalList] = useState([]);
  const [todoText, setTodoText] = useState('');
  // const [value, setValue] = useState('');
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
    const newTodos = [...additionalList, todoText];
    setAdditionalList(newTodos);
    setTodoText('');
  };
  // 削除
  const onClickDelete = (index) => {
    const newTodos = [...additionalList];
    newTodos.splice(index, 1);
    setAdditionalList(newTodos);
  }

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case 'notStarted':
          setFilterLists(additionalList.filter((list) => value === 'notStarted'))
          break
        case 'inProgress':
          setFilterLists(additionalList.filter((list) => value === 'inProgress'))
          break
        case 'done':
          setFilterLists(additionalList.filter((list) => value === 'done'))
          break
        default:
          setFilterLists(additionalList)
      }
    }
    filteringTodos()
  }, [filter, additionalList])

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
        <AdditionalLists
          filterLists={filterLists}
          value={value}
          onChangeStatus={handleStatusChange}
          onClickDelete={onClickDelete}
        />
      </div>
    </div>
    </>
  );
}
export default App;
