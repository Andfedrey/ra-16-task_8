import React, {  useEffect, useState } from 'react'
import saveInfoCard from './useLocaleStorage';

export default function Details({info}) {
  const [localStorageInfo, setLocalStorageInfo] = useState(JSON.parse(localStorage.getItem('data')) || []);

  const [loader, setLoader] = useState(false);

  const result = [...localStorageInfo].filter(el => el.id === info.id)[0]
  const [detail, setDetail] = useState('')
  console.log(detail);
  
  useEffect(() => {
    if(info.start && !result){
      setLoader((prev) => true)
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
      .then((res) => {
        if(!res.ok){
          throw new Error(res.statusText);
        }
        setLoader((prev) => false)
        return res.json()
      })
      .then(data => {
          saveInfoCard(data, setLocalStorageInfo)
          setDetail(data)
        }
      )
    }
    setDetail(result)
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
