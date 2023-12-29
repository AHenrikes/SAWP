import { useState } from "react";

// component used for displaying the input text after being swapped
interface OutputProps {
  value: string;
}

function OutputWindow({ value }: Readonly<OutputProps>) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyState = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000)
      })
    .catch(err => alert(`Unable to copy: ${err}`))
  };

  return (
    <div
      id="output" 
      className="flex flex-col w-[80%] md:w-[70%] xxlg:w-[60%]" >

      <span className="flex justify-end" >
        <button 
          onClick={handleCopyState}
          className="p-2 hover:brightness-150" >
            {isCopied ?
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[1.10rem] h-[1.10rem] checkmark">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              :
              <img 
                className="text-textColor1"
                src="./src/assets/vector.png" 
                alt="copy to clipboard icon" />
            }
        </button>
      </span>

      <p
        id="output_window"
        data-placeholder="tpye hree..."
        className="bg-outputFill h-60 md:h-72 lg:h-80 xxlg:h-96 placeholder:font-roboto border-y-[1px]" >
        {value}
      </p>
    </div>
  );
}

export default OutputWindow;
