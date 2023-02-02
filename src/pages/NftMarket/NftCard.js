import React from 'react';
import { BsHeart } from 'react-icons/bs';

const NftCard = ({ seller, name, image, price }) => {
  return (
    <div className="card shadow-xl bg-darkBlue rounded-md">
      <div className='p-4 relative'>
        <img src={image} alt="Shoes" className="rounded-xl w-[300px] h-[300px]" />
        <button className='place-bid'>Place Bid</button>
      </div>

      <div className="p-4">
        <p className='text-sm text-base-100'>@{seller}</p>
        <h2 className="card-title text-xl text-base-100 py-3">{name}</h2>
        <p className='text-base-100 text-sm'>Current Bid</p>

        <div className="card-action">
          <button className='card-action-like'>
            <BsHeart />
          </button>

          <div className="card-action-like-count">
            2.5k+
          </div>
        </div>
        <div className="flex justify-between text-base-100 ">
          <h3>{price} ETH</h3>
          <h3>Activity</h3>
        </div>
      </div>
    </div>

  );
};

export default NftCard;