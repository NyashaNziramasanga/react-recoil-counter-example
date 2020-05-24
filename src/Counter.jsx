import React from 'react';
import { atom, useRecoilState } from 'recoil';

// Represents a piece of state (Atoms can be read and written from any component)
const counterState = atom({
  key: 'counterState',
  default: 0,
});

const Counter = () => {
  // same as useState hook to get and set value
  const [value, setValue] = useRecoilState(counterState);

  const add = () => setValue(value + 1);
  const subtract = () => setValue(value - 1);

  return (
    <div className="counter">
      <div>Counter: {value}</div>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
};

export default Counter;
