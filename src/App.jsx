import React from 'react';
import Counter from './Counter';
import { RecoilRoot } from 'recoil';
import CharacterCount from './CharacterCount';
import './App.css';

const App = () => (
  // Handle all recoil state from the root
  <RecoilRoot>
    <div className="App-header">
      <h2>Character Counter</h2>
      <CharacterCount />

      <h2>Number Counter</h2>
      <Counter />
    </div>
  </RecoilRoot>
);

export default App;
