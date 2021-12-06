import Hello from './Hello';
import Hello2 from './Hello2';

function Condition2() {
  let isLogin = true;

  return (
    <>
      {isLogin && <Hello />}
      {!isLogin && <Hello2 />}
    </>
  );
}

export default Condition2;
