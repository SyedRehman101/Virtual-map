import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { useDrawerContext } from '../../context/drawerContext';
import './drawer.css';
import Navlinks from '../Navlinks/Navlinks';


const Drawer = () => {
  const drawerRef = useRef(null);

  const { showDrawer, setShowDrawer } = useDrawerContext();

  useClickOutside(drawerRef, () => {
    setShowDrawer(false);
  })

  return (
    <div className={`m-nav ${showDrawer ? 'show' : ''} fixed top-0 left-0 w-[300px] h-screen `} ref={drawerRef}>
      <div className='bg-darkBlue border-r border-r-primay shadow-1 w-full h-full p-4'>

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
        <div className='mt-8 lg:hidden block'>
          <Navlinks />
        </div>

      </div>
    </div>
  )
}

export default Drawer