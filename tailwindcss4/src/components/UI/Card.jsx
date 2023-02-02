import React from 'react';

const Card = (props) => {
  return (
    <div className="p-[1rem] shadow-xl rounded-[14px] bg-white">
      {props.children}
    </div>
  );
};

export default Card;
