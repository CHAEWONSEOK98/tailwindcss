import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-[0.5rem]">
      <label className="font-bold mr-[1rem]" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        className="w-[3rem] rounded-[5px] border-[1px] border-solid border-[#ccc] font-[#inherit] pl-[0.5rem]"
        {...props.input}
        ref={ref}
      />
    </div>
  );
});

export default Input;
