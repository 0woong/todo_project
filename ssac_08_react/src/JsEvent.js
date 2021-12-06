function JsEvent() {
  let msg = 'in React';
  let number = 10;

  const printConsole = () => {
    console.log('Hello World');
  };

  const add = () => {
    number += 1;
    console.log(number);
  };

  const sub = () => {
    number -= 1;
    console.log(number);
  };

  return (
    <>
      <div>
        <button type="button" onClick={printConsole}>
          print {msg}
        </button>
      </div>
      <div>
        <div>{number}</div>
        <button type="button" onClick={add}>
          Add
        </button>
        <button type="button" onClick={sub}>
          Sub
        </button>
      </div>
    </>
  );
}

export default JsEvent;
