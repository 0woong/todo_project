import { useState, useRef } from 'react';

function HookUseState() {
  const inputDom = useRef();

  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
  };

  const sub = () => {
    setValue(value - 1);
  };

  const [text, setText] = useState('');

  let tempText = '';

  const changeText = (event) => {
    tempText = event.target.value;
  };

  const printText = () => {
    setText(tempText);
    inputDom.current.focus();
  };

  const [realtimeText, realtimeSet] = useState('');

  const realtimeChange = (event) => {
    realtimeSet(event.target.value);
  };

  return (
    <>
      <br />
      <br />
      <div>
        <div>{value}</div>
        <button type="button" onClick={add}>
          add
        </button>
        <button type="button" onClick={sub}>
          sub
        </button>
      </div>
      <br />
      <br />
      <div>
        <input type="text" onChange={changeText} ref={inputDom} />
        <button type="button" onClick={printText}>
          print
        </button>
        <div>{text}</div>
      </div>
      <br />
      <br />
      <div>
        <input type="text" onChange={realtimeChange} />
        <div>{realtimeText}</div>
      </div>
    </>
  );
}

export default HookUseState;
