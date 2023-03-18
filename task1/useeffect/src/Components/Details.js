import React, { useEffect, useState } from 'react'

export default function Details({info}) {
  const [detail, setDetail] = useState('')
  const [loader, setLoader] = useState(false);

  useEffect(() => {
      if(info.start){
        setLoader((prev) => true)
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
      .then((res) => {
        if(!res.ok){
          throw new Error(res.statusText);
        }
        setLoader((prev) => false)
        return res.json()
      })
      .then(data => setDetail(data))
      }
  }, [info])
  return (
    <>
    {
    loader ? (
      <h1>loader...</h1>
    ) :
    (detail && 
      <div >
        <img src={detail.avatar} alt='#'></img>
        <h1>{detail.name}</h1>
        <h3>{detail.details.company}</h3>
        <h3>{detail.details.city}</h3>
        <p>{detail.details.position}</p>
      </div>)
    }
    </>
  )
}
