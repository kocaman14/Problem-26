import { useEffect, useState,useRef } from "react"

export default function Stopwatch() {
const [number,setNumber] = useState(0)
const [click,setClick]=useState(false)
const timerId = useRef(null)
useEffect(() => {

  if (click) {
    timerId.current = setInterval(() => {
      setNumber(pre => pre + 1)
    }, 1000);
  } else {
    clearInterval(timerId)
  }

  return () => clearInterval( timerId.current)

}, [click])




  return (
    <div className='p-12 mx-auto space-y-4 max-w-[300px]'>
      <div className='font-bold text-center text-3xl'>Zamanlayıcı: {number}</div>
      <div className='flex justify-between'>
        <button  onClick={()=>setClick(false)}  className='text-amber-500 font-bold'>Durdur</button>
        <button onClick={()=>setClick(true)}className='text-green-500 font-bold'>Başlat</button>
      </div>
    </div>
  )
}
