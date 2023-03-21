import { useEffect, useState } from "react";


const saveInfoCard = (data, stateHook) => {
  const storageData = JSON.parse(localStorage.getItem('data')) || []
  const newData = [...storageData, data]
  localStorage.setItem('data', JSON.stringify(newData))
  stateHook(newData)
}

export default saveInfoCard