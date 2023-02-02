import React from 'react';

const NftCard = ({ seller, name, image, price }) => {
  return (
    <div className="card shadow-xl bg-darkBlue rounded-md">
      <figure className="p-4">
        <img src={image} alt="Shoes" className="rounded-xl w-[300px] h-[300px]" />
      </figure>
      <div className="p-4">
        <p className='text-sm text-base-100'>@{seller}</p>
        <h2 className="card-title text-xl text-base-100 py-3">{name}</h2>
        <p className='text-base-100 text-sm'>Current Bid</p>
        <div className="flex justify-between text-base-100 ">
          <h3>{price} ETH</h3>
          <h3>Activity</h3>
        </div>
      </div>
    </div>

  );
};

export default NftCard;