import todoList from "../ToDo_css/todoList.module.css";
import status from "../ToDo_css/status.module.css";

function ToDoStatus({ ToDoArray }) {
  return (
    <section className={todoList.section}>
      <div className={status.section}>
        <div className={status.left}>{ToDoArray.length} items left</div>
        <div className="status-filter">
          <button type="button" className={status.btn}>
            All
          </button>
          <button type="button" className={status.btn}>
            Active
          </button>
          <button type="button" className={status.btn}>
            Completed
          </button>
        </div>
        <div className={status.clear}>
          <button type="button" className={status.btn}>
            Clear Completed
          </button>
        </div>
      </div>
    </section>
  );
}

export default ToDoStatus;
