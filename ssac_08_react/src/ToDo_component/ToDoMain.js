import main from "../ToDo_css/main.module.css";

function ToDoMain({ children }) {
  return <main className={main.main}>{children}</main>;
}

export default ToDoMain;
