import React, { useEffect, useState } from 'react'
import Details from './Details';

export default function List() {
  const [list, setList] = useState([]);
  const [info, setInfo] = useState({id:'', name:'', start: false})
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then(res => res.json())
    .then(data => setList(data))
  }, [])

  return (
    <div className='wrapper-info'>
      <div className='info-block'>
        <ul>
          {list.map((el) => (
            <li key={el.id} className="blockLi">
              <div  onClick={() => setInfo({id:el.id,name:el.name,start:true})}>{el.name}</div>
            </li>
          )) }
        </ul>
      </div>
      <div className='info-details'>
        <Details info={info}></Details>
      </div>
    </div>
  )
}
