import todoList from "../ToDo_css/todoList.module.css";
import todoItem from "../ToDo_css/todoItem.module.css";
import axios from "axios";

import { baseURL, getAllData } from "../App";
import { useState, useRef, useEffect } from "react";

// import { getAllData } from '../App';

function ToDoItem({ todo, removeToDo, setToDoArray }) {
  const editInputRef = useRef(null);
  // const baseURL = 'qweqweqwe'

  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todo.todoContent);

  // 수정할 텍스트를 적고, enter키를 눌렀을 때 통신을 진행하고, 새로운 배열값을 결과값으로 받은 후
  // 이를 todoArr에 적용 (setTodoArray)

  useEffect(() => {
    // input focus
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const onClickEdit = () => {
    setEdited(true);
  };

  const onChangeEditInput = (event) => {
    const { _, value } = event.target;
    setNewText(value);
  };

  const onPressSubmit = async (id) => {
    try {
      const newTodo = {
        todoContent: newText, // 수정할 텍스트
      };
      const response = await axios({
        method: "PUT",
        url: `${baseURL}/todos/${id}`,
        data: newTodo,
      });
      if (response.status === 200) {
        const result = await getAllData();
        setToDoArray(result);
        setEdited(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeChecked = async (id, checked) => {
    const response = await axios({
      method: "PUT",
      url: `${baseURL}/todos/${id}`,
      data: {
        todoContent: todo.todoContent, // 수정 안함
        checked: !checked,
      },
    });
    if (response.status === 200) {
      const result = await getAllData();
      setToDoArray(result);
    }
  };

  return (
    <li className={todoItem["todo-item"]}>
      <input
        type="checkbox"
        className={todoItem.check}
        checked={todo.checked}
        onChange={() => {
          onChangeChecked(todo.id, todo.checked);
        }}
      />
      {edited ? (
        <input
          ref={editInputRef}
          value={newText}
          className={todoItem.edit_input}
          onChange={onChangeEditInput}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              console.log(todo.id);
              onPressSubmit(todo.id);
            }
          }}
        />
      ) : (
        // 체크가 되어 있는 경우
        <mark
          className={todo.checked === 1 ? todoItem.text_checked : todoItem.text}
          onClick={onClickEdit}
        >
          {todo.todoContent}
        </mark>
      )}
      <button
        type="button"
        className={todoItem.del}
        onClick={function () {
          return removeToDo(todo.id);
        }}
      >
        <img src="add_button.svg" alt="Del" className={todoItem.delimg} />
      </button>
    </li>
  );
}

function ToDoList({ ToDoArray, removeToDo, setToDoArray }) {
  return (
    <section className={todoList.section}>
      <ul className="todo-list">
        {ToDoArray.map(function (todo) {
          return (
            <ToDoItem
              todo={todo}
              key={todo.id}
              removeToDo={removeToDo}
              setToDoArray={setToDoArray}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ToDoList;
