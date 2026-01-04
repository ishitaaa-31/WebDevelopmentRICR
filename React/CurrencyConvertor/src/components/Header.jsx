import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
const Header = () => {
  return (
    <>
    <div className='bg-blue-500 px-4 py-2 text-3xl text-white text-center flex justify-center'>
<MdCurrencyExchange className='animate-bounce ' />
<span className='font-bold '>    Currency Convertor </span>
<BsCurrencyExchange  className='animate-bounce'/>

    </div>
    </>
  )
}

export default Header