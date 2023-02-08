import React from 'react'
import nftImage from '../../../assets/Images/nft-image.jpg';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaMapMarkerAlt, FaRedditAlien, FaTwitter } from 'react-icons/fa';
const BookedNftInfo = (props) => {
  return (
    <div id='booked-nft-modal' className=' absolute p-8 w-1/5 modal-bg border-0 border-gray-100 top-36 rounded-lg right-0 translate-x-96   z-30 h-auto transition-all duration-500'>
      <div className='flex justify-end'>
        <button onClick={() => {
          const div = document.getElementById("booked-nft-modal");
          div.classList.add("translate-x-96")
        }}>
          <AiOutlineClose className='text-gray-400 text-lg hover:animate-spin hover:text-purple-400 ' />
        </button>
      </div>
      <br />
      <img className='mx-auto' width={"90%"} src={nftImage} />

      <br />

      <p className='text-gray-300 text-xs uppercase'>
        Owner
      </p>

      <div className='flex mt-2'>
        <label className=' w-32 bg-blue-300 text-center text-white  text-sm p-1'>
          Hassan Tariq
        </label>

        <FaMapMarkerAlt className=' text-cyan-400 my-auto ml-2 mr-1' /> <p className='text-white text-sm font-bold my-auto'>17, -35</p>
      </div>

      <p className='text-gray-300 text-sm my-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, soluta.
      </p>

      <small className='text-gray-400 font-semibold'>WHAT CAN I DO WITH LAND?</small>

      <ul className=' text-cyan-400 list-disc px-4'>

        <li>
          <small className='text-gray-400 font-semibold'>Start building!</small>
        </li>
        <li>
          <small className='text-gray-400 font-semibold'>Earn special rewards</small>
        </li>
        <li>
          <small className='text-gray-400 font-semibold'>Exclusive LAND Owner staking</small>
        </li>

      </ul>

      <div className='flex gap-7 justify-center mt-4 transition-all'>
        <a href='#' className='bg-white transition-all duration-500 hover:bg-blue-600 hover:animate-bounce hover:text-white flex justify-center items-center  rounded-full w-10 border-none h-10 uppercase  text-xs font-bold'>
          <FaFacebookF className='text-xl' />
        </a>
        <a href='#' className='bg-white transition-all duration-500 hover:animate-bounce hover:bg-orange-500 hover:text-white flex justify-center items-center  rounded-full w-10 border-none h-10 uppercase  text-xs font-bold'>
          <FaRedditAlien className='text-2xl' />
        </a>
        <a href='#' className='bg-white transition-all duration-500 hover:animate-bounce hover:bg-blue-400 hover:text-white flex justify-center items-center   rounded-full w-10 border-none h-10 uppercase  text-xs font-bold'>
          <FaTwitter className='text-2xl' />
        </a>
      </div>
    </div>
  )
}

export default BookedNftInfo;