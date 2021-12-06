import { useState, useRef } from 'react';

import HookArray from './HookArray';
import HookArrayCreate from './HookArrayCreate';

function AppArray() {
  // 기본 데이터(객체) 배열
  const [carArray, setCarArray] = useState([
    {
      id: 1,
      carname: 'Fiat',
      color: 'white',
    },
    {
      id: 2,
      carname: 'Kia',
      color: 'red',
    },
    {
      id: 3,
      carname: 'Hyundai',
      color: 'grey',
    },
  ]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
  const [carInput, setCarInput] = useState({
    carname: '',
    color: '',
  });

  // 구조 분해 할당
  const { carname, color } = carInput;

  // input에 텍스트 입력시 carInput에 데이터 업데이트, 화면에 텍스트 표시 리렌더링하는 함수
  const changeText = (e) => {
    // onChane 이벤트 발생되었을 때 이벤트 객체에서 name, value를 받아 옴
    const { name, value } = e.target;

    // carInput 객체에 새로 받아온 데이터를 set
    setCarInput({
      ...carInput,
      [name]: value,
    });
  };

  // useRef()에 매개변수값을 넣어주면 해당 값이 current 프로퍼티 값으로 설정
  const nextId = useRef(4);

  // 버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 / 리렌더링
  const addText = () => {
    // 기본 데이터 배열에 넣어줄 객체
    const newCar = {
      id: nextId.current,
      carname: carname,
      color: color,
    };

    setCarArray([...carArray, newCar]);

    setCarInput({
      carname: '',
      color: '',
    });

    nextId.current++;

    console.log(carArray);
  };

  const removeText = (id) => {
    // filter 내장 함수 : 조건에 맞는 데이터만 추출해서 새로운 데이터(배열) 생성
    setCarArray(
      carArray.filter(function (car) {
        return car.id !== id;
      }),
    );
  };

  return (
    <>
      <HookArrayCreate
        carname={carname}
        color={color}
        changeText={changeText}
        addText={addText}
      />
      <HookArray carArray={carArray} removeText={removeText} />
    </>
  );
}

export default AppArray;
