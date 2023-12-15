import React from "react";

function OutputWindow() {
  return (
    <div className="flex flex-col w-[80%] md:w-[70%] xxlg:w-[60%] m-auto py-6 relative" id="output">
      <button className="absolute right-[3px] top-[3px]">
        <img className="" src="./src/assets/images/Vector.png" alt="copy to clipboard icon" />
      </button>
      <textarea
        // readOnly
        placeholder="tpye hree..."
        className="bg-outputFill h-40 sm:h-56 md:h-72 lg:h-80 xxlg:h-96 placeholder:font-roboto border-y-[1px] input_output_style resize-none"
      ></textarea>
    </div>
  );
}

export default OutputWindow;
