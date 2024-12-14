// import TodoButton from './TodoButton';
import { type TTodo } from '../App';

type TProps = {
  filteredTodos: TTodo[]
  handleStatusChange: (todo: TTodo, e: React.ChangeEvent<HTMLSelectElement>) => void
  handleOpenEditForm: (id: number) => void
  handleDeleteTodo: (id: number) => void
}
const TodoLists = (props: TProps) => {
  const { filteredTodos, handleStatusChange, handleOpenEditForm, handleDeleteTodo } = props;
  return (
    <ul>
      {filteredTodos.map((todo) => (
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
          {/* <TodoButton clickFunc={() => handleOpenEditForm(todo)} label='編集' /> */}
          <button onClick={() => handleOpenEditForm(todo.id)}>編集</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
