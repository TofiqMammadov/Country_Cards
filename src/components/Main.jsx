import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import infos from "../constants/datas.json"
export const Main = () => {
  const [skip, setSkip] = useState(8)
  const [datas, setDatas] = useState(infos.slice(0, 8));  

  const handleShowMore = () => {
    const newData = infos.slice(skip, skip + 4); 
    setDatas([...datas, ...newData]); 
    setSkip(skip + 4)  
  }
  return (
    <div className='flex flex-col items-center py-5'>
      <div className='grid  lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 gap-3 p-5 justify-center' >
        {
          datas.map((data, idx) => {
            return (
              <Card key={idx} data={data} />
            )
          })
        }
      </div>
      <button onClick={handleShowMore} className='py-2 px-3 text-center bg-blue-500 rounded-lg text-white'>Show more</button>
    </div>
  )
}
