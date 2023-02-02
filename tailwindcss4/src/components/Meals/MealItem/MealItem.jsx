import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="flex justify-between m-[1rem] pb-[1rem] border-b-[1px] border-b-[#ccc]">
      <div>
        <h3 className="my-[5px] font-bold">{props.name}</h3>
        <div className="font-[italic]">{props.description}</div>
        <div className="mt-[0.25rem] font-bold text-[#ad5502] text-[1.25rem]">
          {price}
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
