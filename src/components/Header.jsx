import { useState } from 'react'

import User from '../assets/user.png';
import Login from './Login';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header
        className="
        bg-blue-600
        px-4
        py-2
        sticky
        top-0
        flex
        items-end
        justify-end
      ">
        <button onClick={() => setToggle(!toggle)} >
          <img src={User} alt='user Icon' width={40} height={40} className=''/>
        </button>
      </header>

      {toggle && (
        <div className="flex items-center pl-24 rounded-md z-20">
          <div className="w-48 h-28 flex items-center justify-center bg-white">
            <h2 className="text-xl font-semibold">Welcome</h2> 
          </div>
          <div className="w-48 h-28 flex items-center justify-center bg-blue-400 relative">
            <span onClick={() => setToggle(!toggle)} className='absolute top-2 right-2 font-semibold bg-gray-300 px-2 rounded-full cursor-pointer'>X</span>
            <Login />
          </div>
       </div>
      )}
    </>
  )
}

export default Header