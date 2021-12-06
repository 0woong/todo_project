// ../ : 상위폴더
// ./ : 현재폴더
import "./App.css";
import TodoHeader from "./ToDo_component/ToDoHeader";
import TodoMain from "./ToDo_component/ToDoMain";
import TodoList from "./ToDo_component/ToDoList";
// import TodoItem from './ToDo_component/ToDoItem';
import TodoStatus from "./ToDo_component/ToDoStatus";
import TodoFooter from "./ToDo_component/ToDoFooter";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

export const baseURL = "http://localhost:3000";

export const getAllData = async () => {
  const response = await axios({
    method: "GET",
    url: `${baseURL}/todolists`,
  });
  const result = response.data.data;
  return result;
};

function App() {
  // 기본 데이터(객체) 배열
  const [todoArray, setTodoArray] = useState([]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
  const [todoInput, setTodoInput] = useState({
    todoContent: "",
  });

  useEffect(() => {
    console.log("최초 1회 실행");
    // url: todolists
    // method: GET

    axios({
      method: "GET",
      url: `${baseURL}/todolists`,
    })
      .then((response) => {
        const result = response.data.data;
        setTodoArray(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 페이지를 처음 렌더링 할 때, 서버에 전체 리스트 정보를 요철해서, 전체 데이터를 가져온다음,

  // 구조 분해 할당
  const { todoContent } = todoInput;

  // input에 텍스트 입력시 carInput에 데이터 업데이트, 화면에 텍스트 표시 리렌더링하는 함수
  const changeTodo = (e) => {
    const { name, value } = e.target;

    setTodoInput({
      ...todoInput,
      [name]: value,
    });
  };

  // 버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 / 리렌더링
  const addTodo = async () => {
    const newTodo = {
      todoContent: todoContent,
    };

    // method : post
    // url : /todolists
    // body: {id, todoContent}
    try {
      const response = await axios({
        method: "POST",
        url: `${baseURL}/todolists`,
        data: newTodo,
      });

      if (response.status === 200) {
        const result = await getAllData();
        setTodoArray(result);
        setTodoInput({
          todoContent: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async (id) => {
    // method : DELETE
    // url : /todolists/:id
    try {
      const response = await axios({
        method: "DELETE",
        url: `${baseURL}/todolists/${id}`,
      });

      if (response.status === 200) {
        const result = await getAllData();
        setTodoArray(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TodoHeader
        todoContent={todoContent}
        changeTodo={changeTodo}
        addTodo={addTodo}
      />
      <TodoMain>
        <TodoList
          todoArray={todoArray}
          removeTodo={removeTodo}
          setTodoArray={setTodoArray}
        />
        <TodoStatus todoArray={todoArray} />
      </TodoMain>
      <TodoFooter />
    </>
  );
}

export default App;
