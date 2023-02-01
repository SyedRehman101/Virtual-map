import React from 'react';

const NftCard = ({ seller, name, image, price }) => {
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <p className='text-sm'>@{seller}</p>
        <h2 className="card-title text-2xl">{name}</h2>
        <div className="">
          <p>Current Bid</p>
          <h3>{price} ETH</h3>
        </div>
      </div>
    </div>
  );
};

export default NftCard;