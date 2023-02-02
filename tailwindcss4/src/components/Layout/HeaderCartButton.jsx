import React from 'react';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button
      onClick={props.onClick}
      className="cursor-pointer font-[inherit] border-none bg-[#4d1601] text-white py-[0.75rem] px-[3rem] flex justify-around items-center rounded-[25px] font-bold hover:bg-[#2c0d00] active:bg-#2c0d00"
    >
      <span className="w-[1.35rem] h-[1.35rem] mr-[0.5rem]">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b94517] py-[0.25rem] px-[1rem] rounded-[25px] ml-[1rem] font-bold hover:bg-[#92320c] active:bg-[#92320c]">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
