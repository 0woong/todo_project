import todoItem from "../ToDo_css/todoitem.module.css";

function TodoItem() {
  return (
    <li class={todoItem["todo-item"]}>
      <input type="checkbox" className={todoItem.check} />
      <mark className={todoItem.text}>할일 todo</mark>
      <button type="button" className={todoItem.del}>
        <img src="add_button.svg" alt="" className={todoItem.img} />
      </button>
    </li>
  );
}

export default TodoItem;
