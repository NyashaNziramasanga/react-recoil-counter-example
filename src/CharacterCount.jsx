import React from 'react';
import { atom, useRecoilState, selector, useRecoilValue } from 'recoil';

const characterState = atom({
  key: 'characterState',
  default: '',
});

// Selector is used to retrieve a derived/computed state
const characterCountState = selector({
  key: 'characterCountState',
  get: ({ get }) => {
    const chars = get(characterState);
    return chars.length;
  },
});

const CharacterCount = () => {
  const [character, setCharacter] = useRecoilState(characterState);
  const characterCount = useRecoilValue(characterCountState);

  return (
    <div>
      <span>count {characterCount}</span>
      <input
        type="text"
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
      />
    </div>
  );
};
export default CharacterCount;
