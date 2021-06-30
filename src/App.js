import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementby5 } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  //This will mount on first load of component but if we give dependency array then
  // it will load everytime whenever dependent state is mutated
  useEffect(() => {
    dispatch(increment());
    return () => {};
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Counter{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementby5(5))}>+5</button>
      {isLogged ? <h3> private info not see if not logged in</h3> : ''}
    </div>
  );
}

export default App;
