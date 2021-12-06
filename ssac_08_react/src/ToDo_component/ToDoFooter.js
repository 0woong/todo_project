import footer from "../ToDo_css/footer.module.css";

function ToDoFooter() {
  return (
    <footer className={footer.footer}>
      <div className={footer.section}>
        <div>ToDo App</div>
        <div>&copy; Copyright All Rights Reserved.</div>
      </div>
    </footer>
  );
}

export default ToDoFooter;
