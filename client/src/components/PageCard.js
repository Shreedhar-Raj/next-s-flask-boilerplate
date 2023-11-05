import React from 'react';

const PageCard = (props) => {
  return (
    <div className="max-w-md w-fit rounded-xl border border-1 shadow-2xl">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.data.title}</div>
        <p className="text-gray-700 w-parent text-base whitespace-normal">
          {props.data.description}
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
          {props.data.action}
        </button>
      </div>
    </div>
  );
};

export default PageCard;
