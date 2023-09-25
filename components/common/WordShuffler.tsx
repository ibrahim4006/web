import { useEffect, useState } from 'react';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomChar = () => {
  const charCode = getRandomInt(48, 57);
  return String.fromCharCode(charCode);
};

const WordShuffler = (length) => {
  const [word, setWord] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const newWord = Array.from({ length }, () => getRandomChar()).join('');
      setWord(newWord);
    }, 200);

    return () => clearInterval(interval);
  }, [length]);

  return word;
};

export default WordShuffler;
