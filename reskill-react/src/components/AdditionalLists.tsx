const AdditionalLists = (props) => {
  const { filterLists, value, onClickDelete, onChangeStatus } = props;
  return (
    <div className="incomplete-area">
      <ul>
        {filterLists.map((list,index) => (
          <li key={list}>
            <p>{list}</p>
            <select
              value={value}
              onChange={onChangeStatus}
            >
              <option value="notStarted">未着手</option>
              <option value="inProgress">作業中</option>
              <option value="done">完了</option>
            </select>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalLists;