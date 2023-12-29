function UserInput() {

  return (
    <div className="w-[60%] md:w-[50%]" >
      <input
        type="text" 
        placeholder="type here..."
        className="inputField w-[100%] bg-inputFill border-borderColor1 h-12 rounded-[7px] placeholder:font-krona border-[1px] input_output_style" />
    </div>
  );
}

export default UserInput;
