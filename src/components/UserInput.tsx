import React, { useState } from "react";

interface UserInputProps {
  onInputChange: (value: string) => void;
}

function UserInput({ onInputChange }: Readonly<UserInputProps>) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setInputValue(value);
    onInputChange(value);
  }

  return (
    <div className="w-[60%] md:w-[50%]" >
      <input
        type="text" 
        value={inputValue}
        onChange={handleInput}
        placeholder="type here..."
        className="inputField w-[100%] bg-inputFill border-borderColor1 h-12 rounded-[7px] placeholder:font-krona border-[1px] input_output_style" />
    </div>
  );
}

export default UserInput;
