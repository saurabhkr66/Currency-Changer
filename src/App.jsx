import { useState } from 'react'
import {input} from './components'
import usecurrencyinfo from './hooks/usecurrencyinfo'

import './App.css'

function App() {
  const [amount,setamount]=useState(0)
  const [from,setfrom]=usestate("usd")
  const [to,setto]=usestate("inr")
  const [convetedamount,setcoonvertedamount]=usestate(0)
  const currencyinfo=usecurrencyinfo(from)
  
const options=Object.keys(currencyinfo)
const swap=()=>{
  setfrom(to)
  setto(from)
  setcoonvertedamount(amount)
  setamount(convetedamount)
}
const convert=()=>{
setcoonvertedamount(amount * currencyinfo[to])
}
  return (
   <div 
   className="w-full h-screen flex flex-wrap
   justify-center items-center bg-cover bg-no-repeat"
   style={{
    backgroundImage:`url('${BackgroundImage}')`,
   }}>
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5
      backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e)=>{
          e.preventDefault();
          convert()

        }}
        >
          <div className='w-ull mb-1'>
            <input
            label="from"
          </div>
        </form>


      </div>
    </div>
   </div>
  )
}

export default App
