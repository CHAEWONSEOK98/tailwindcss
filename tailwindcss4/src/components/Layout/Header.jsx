import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="fixed top-0 left-0 w-full h-[5rem] bg-[#8a2b06] text-white flex justify-between items-center px-[10%] shadow-[0 2px 8px rgba(0, 0, 0, 0.25)] z-10">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          Food Order App
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="w-[110%] h-[25rem] z-0 overflow-hidden">
        <img
          className="w-[100%] h-[100%] object-cover transform rotate-[-5deg] translate-y-[-4rem] translate-x-[-1rem]"
          src={mealsImage}
          alt="A table full of delicious food!"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
