import React, { useState } from "react";

interface UserInputProps {
  onInputChange: (value: string) => void;
}

function UserInput({ onInputChange }: Readonly<UserInputProps>) {
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  const shuffleLetters = (word: string): string => {
    const letters = word.split('');
    const length = letters.length;

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * length);
      [letters[i], letters[random]] = [letters[random], letters[i]];
    }

    return letters.join('');
  };

  const mainFunction = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      const words = inputValue.trim().split(' ');

      const modifiedInput = words.map((word) => {
        if (word.length < 2) {
          return word;

        } else {
          const [firstLetter, ...middleLetters] = word;
          const lastLetter = middleLetters.pop();
          const shuffledWord = shuffleLetters(middleLetters.join(''));

          return [firstLetter, shuffledWord, lastLetter].join('');
        }
      });

      onInputChange(modifiedInput.join(' '))
      setInputValue('');
    }
  };

  return (
    <div className="w-[60%] md:w-[50%]" >
      <input
        type="text"
        value={inputValue}
        onChange={inputHandler}
        onKeyDown={mainFunction}
        placeholder="type here..."
        className="inputField w-[100%] bg-inputFill border-borderColor1 h-12 rounded-[7px] placeholder:font-krona border-[1px] input_output_style" />
    </div>
  );
}

export default UserInput;
