import axios from "axios";
import React, { useState, useEffect } from "react";


function useFlip (initialState = false){
    const [flip, flipSet] = useState(initialState)

    const flipCard = () => {
        flipSet(isUp => !isUp);
      };

    return [flip, flipCard]
}

function useAxios (url) {
  const [data, setData] = useState([])

  console.log(url)

  const getData = async (endpoint = '') => {
    try{
      const res = await axios.get(url + endpoint)
      setData((prevData) => [...prevData, res.data])
    } catch(err){
      console.error('Error fetching data:', err)
    }
  }

  return [data, getData]
}



export { useFlip, useAxios }