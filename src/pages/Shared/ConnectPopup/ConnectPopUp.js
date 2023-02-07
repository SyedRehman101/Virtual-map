import React from 'react';
import metamask from '../../../assets/Nft-Market_img/MaskingMad.png'
import Wifi from '../../../assets/Nft-Market_img/WifiConnect.png'

const ConnectPopUp = () => {
  return (
    <>
      <input type="checkbox" id="wallet_connect_modal" className="modal-toggle" />
      <div className="modal  modal-bottom sm:modal-middle">

        <div className="modal-box bg-primaryDark w-[500px] h-[300px] flex items-center">
          <label htmlFor="wallet_connect_modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-primary border-primary hover:bg-primary hover:border-primary">✕</label>
          <div className='w-full'>
            <p className='text-center mb-8 text-base-100 text-2xl font-bold'>Connect</p>
            <p className='cursor-pointer flex justify-between py-2 px-8 bg-orange-900 text-base-100 uppercase rounded-lg mb-4 hover:bg-orange-700 ease-in-out duration-200'><button>Meta Mask</button> <img src={metamask} alt="" /></p>
            <p className='py-2 cursor-pointer px-8 flex justify-between bg-violet-900 text-base-100 uppercase rounded-lg hover:bg-violet-700 ease-in-out duration-200'><button>Connect Wallet</button> <img src={Wifi} alt="" /></p>
          </div>

        </div>
      </div>
    </>
  );
};

export default ConnectPopUp;