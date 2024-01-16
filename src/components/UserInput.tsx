import React, { useState, useCallback } from "react";

interface UserInputProps {
  onInputChange: (value: string) => void;
}

function UserInput({ onInputChange }: Readonly<UserInputProps>) {
  const [inputValue, setInputValue] = useState('');
  const [storedString, setStoredString] = useState<string[]>([]);
  
  const handleInput = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
    
    const modifiedValue = storedString.map(element => {
      const splitedString = element.split('');
      
      if(splitedString.length < 2) {
        return splitedString.join('');
        
      } else {
        const [firstLetter, lastLetter] = [splitedString.shift(), splitedString.pop()]
        return [firstLetter, shuffle(splitedString), lastLetter].join('');
      }
    }).join(' ');

    onInputChange(modifiedValue);
  },[onInputChange, storedString]);
  
  const storeValue = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === " " && inputValue.trim() !== "") {
      setStoredString([...storedString, inputValue.trim()]);
      setInputValue('');
    }
  }, [inputValue, storedString]);
  
  const shuffle = (array: string[]): string => {
    const shuffledArray = [...array]
    const length = shuffledArray.length;
    
    for(let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * length);
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
  
    return shuffledArray.join('');
  }

  return (
    <div className="w-[60%] md:w-[50%]" >
      <input
        type="text" 
        value={inputValue}
        onChange={handleInput}
        onKeyDown={storeValue}
        placeholder="type here..."
        className="inputField w-[100%] bg-inputFill border-borderColor1 h-12 rounded-[7px] placeholder:font-krona border-[1px] input_output_style" />
    </div>
  );
}

export default UserInput;
