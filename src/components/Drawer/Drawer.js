import { useDrawerContext } from 'context/drawerContext'
import { useRef } from 'react';
import useClickOutside from 'utils/clickOutside';
import './drawer.css';


const Drawer = () => {
  const drawerRef = useRef(null);
  const { showDrawer, setShowDrawer } = useDrawerContext();

  useClickOutside(drawerRef, () => {
    setShowDrawer(false);
  })

  return (
    <div className={`m-nav ${showDrawer ? 'show' : ''} fixed top-0 left-0 w-[300px] h-screen z-50 `} ref={drawerRef}>
      <div className='bg-primaryDark border-r border-r-primay shadow-1 w-full h-full p-4'>

        <div className='flex justify-between'>
          <h1 className='text-white font-semibold text-3xl  pb-2 px-1'>
            LOGO
          </h1>
          <div className='w-fit cursor-pointer text-pure'
            onClick={() => setShowDrawer(false)}
          >
            <i className="uil uil-times text-2xl "></i>
          </div>
        </div>
        <div className='mt-8'>
          <ul className='flex flex-col gap-4 text-pure'>
            <a href='#' onClick={() => setShowDrawer(false)}>
              <li className='border-b-2 border-b-gray-300 py-2 px-2 hover:bg-primary  duration-200 ease-in-out cursor-pointer flex items-center justify-between '>
                <p>Game Play</p>
                <i className="uil uil-angle-double-right text-2xl"></i>
              </li>
            </a>
            <a href='#' onClick={() => setShowDrawer(false)}>
              <li className='border-b-2 border-b-gray-300 py-2 px-2 hover:bg-primary hover:text-white duration-200 ease-in-out cursor-pointer flex items-center justify-between'>
                <p>About Us</p>
                <i className="uil uil-angle-double-right text-2xl"></i>
              </li>
            </a>
            <a href='#' onClick={() => setShowDrawer(false)}>
              <li className='border-b-2 border-b-gray-300 py-2 px-2 hover:bg-primary hover:text-white duration-200 ease-in-out cursor-pointer flex items-center justify-between'>
                <p>NFT Market</p>
                <i className="uil uil-angle-double-right text-2xl"></i>
              </li>
            </a>
            <a href='#' onClick={() => setShowDrawer(false)}>
              <li className='border-b-2 border-b-gray-300 py-2 px-2 hover:bg-primary hover:text-white duration-200 ease-in-out cursor-pointer flex items-center justify-between'>
                <p>Land Map</p>
                <i className="uil uil-angle-double-right text-2xl"></i>
              </li>
            </a>
            <a href='#team' onClick={() => setShowDrawer(false)}>
              <li className='border-b-2 border-b-gray-300 py-2 px-2 hover:bg-primary hover:text-white duration-200 ease-in-out cursor-pointer flex items-center justify-between'>
                <p>Staking</p>
                <i className="uil uil-angle-double-right text-2xl"></i>
              </li>
            </a>
            <a href='#' onClick={() => setShowDrawer(false)}>
              <li className='border-b-2 border-b-gray-300 py-2 px-2 hover:bg-primary hover:text-white duration-200 ease-in-out cursor-pointer flex items-center justify-between'>
                <p>Media</p>
                <i className="uil uil-angle-double-right text-2xl"></i>
              </li>
            </a>
            <a href='#' onClick={() => setShowDrawer(false)}>
              <li className='border-b-2 border-b-gray-300 py-2 px-2 hover:bg-primary hover:text-white duration-200 ease-in-out cursor-pointer flex items-center justify-between'>
                <p>DAO</p>
                <i className="uil uil-angle-double-right text-2xl"></i>
              </li>
            </a>
            <a href='#' onClick={() => setShowDrawer(false)}>
              <li className='border-b-2 border-b-gray-300 py-2 px-2 hover:bg-primary hover:text-white duration-200 ease-in-out cursor-pointer flex items-center justify-between'>
                <p>FQA</p>
                <i className="uil uil-angle-double-right text-2xl"></i>
              </li>
            </a>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Drawer