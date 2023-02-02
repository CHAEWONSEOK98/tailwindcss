import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-[20rem] overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-[1.5rem] my-[1rem]">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          onClick={props.onClose}
          className="font-[#inherit] cursor-pointer bg-transparent border-solid border-[1px] border-[#8a2b06] py-[0.5rem] px-[2rem] rounded-[25px] ml-[1rem] hover:bg-[#8a2b06] hover:text-white"
        >
          Close
        </button>
        {hasItems && (
          <button className="font-[#inherit] cursor-pointer bg-transparent border-solid border-[1px] border-[#8a2b06] py-[0.5rem] px-[2rem] rounded-[25px] ml-[1rem] hover:bg-[#8a2b06] hover:text-white">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
