function UserInput(props: {setText: any}) {
  const {setText} = props;

  // handle text going from the input field to the output

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div className="m-auto w-[60%] md:w-[50%]">
      <input onChange={handleChange} className="inputField w-[100%] bg-inputFill border-borderColor1 p-3 rounded-[7px] placeholder:font-krona border-[1px] input_output_style" type="text" placeholder="type here..." />
    </div>
  );
}

export default UserInput;
