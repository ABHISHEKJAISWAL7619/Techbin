const Input = ({type,placeholder}) => {
  return (
    <input
      className="bg-gray-300 w-full md:w-1/2 placeholder-gray-700 h-10 pl-5 outline-sky-400 rounded-md"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
