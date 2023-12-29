// component used for displaying the input text after being swapped

function OutputWindow() {
  return (
    <div
      id="output" 
      className="flex flex-col w-[80%] md:w-[70%] xxlg:w-[60%]" >

      <span className="flex justify-end" >
        <button className="p-2 hover:brightness-150" >
          <img 
            className="text-textColor1" 
            src="./src/assets/vector.png" 
            alt="copy to clipboard icon" />
        </button>
      </span>

      <p
        data-placeholder="tpye hree..."
        className="bg-outputFill h-40 sm:h-56 md:h-72 lg:h-80 xxlg:h-96 placeholder:font-roboto border-y-[1px] input_output_style" >
      </p>
    </div>
  );
}

export default OutputWindow;
