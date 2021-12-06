import Hello from './Hello';
import Hello2 from './Hello2';

function Condition3() {
  let isLogin = false;

  return <>{isLogin ? <Hello /> : <Hello2 />}</>;
}

export default Condition3;
