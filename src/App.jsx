import React from 'react';
import Counter from './Counter';
import { RecoilRoot } from 'recoil';
import './App.css';

const App = () => (
  <RecoilRoot>
    <div className="App-header">
      <div>hello</div>
      <Counter></Counter>
    </div>
  </RecoilRoot>
);

export default App;
