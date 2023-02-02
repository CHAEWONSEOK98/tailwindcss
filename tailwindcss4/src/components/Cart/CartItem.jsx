const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-[2px] border-solid border-[#8a2b06] py-[1rem] my-[1rem]">
      <div>
        <h2 className="text-[#363636] ml-[0.5rem] font-bold">{props.name}</h2>
        <div className="w-[10rem] flex justify-between items-center">
          <span className="font-bold text-[#8a2b06]">{price}</span>
          <span className="font-bold border-[1px] border-solid border-[#ccc] py-[0.25rem] px-[0.75rem] rounded-[6px] text-[#363636]">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          className="font-[inherit] font-bold text-[1.25rem] text-[#8a2b06] w-[3rem] text-center border-[1px] border-[#8a2b06] rounded-[6px] bg-transparent cursor-pointer ml-[1rem] m-[0.25rem] hover:bg-[#8a2b06] hover:text-white"
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className="font-[inherit] font-bold text-[1.25rem] text-[#8a2b06] w-[3rem] text-center border-[1px] border-[#8a2b06] rounded-[6px] bg-transparent cursor-pointer ml-[1rem] m-[0.25rem] hover:bg-[#8a2b06] hover:text-white"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
