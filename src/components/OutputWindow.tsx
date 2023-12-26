// component used for displaying the input text after being swapped

function OutputWindow(props: {s: string}){
  const {s} = props
  return (
    <div className="flex flex-col w-[80%] md:w-[70%] xxlg:w-[60%] m-auto py-6 relative" id="output">
      <button className="absolute right-[3px] top-[3px] hover:brightness-150">
        <img className="text-textColor1" src="./src/assets/vector.png" alt="copy to clipboard icon" />
      </button>
      <p data-placeholder="tpye hree..." className="bg-outputFill h-40 sm:h-56 md:h-72 lg:h-80 xxlg:h-96 placeholder:font-roboto border-y-[1px] input_output_style overflow-hidden">{s}</p>
    </div>
  );
}

export default OutputWindow;
