import React, { useState } from 'react'

export default function SortComponent({arr, valueToSort, setUserList}) {
    const [sort, setSort] = useState(true);


    const sorted = () => {
    let newArr = arr.sort((a,b) => b[valueToSort] - a[valueToSort])
    setUserList([...newArr]);
    setSort(prev => !prev);
  }

    const sortedDown = () => {
    let newArr = arr.sort((a,b) => a[valueToSort] - b[valueToSort])
    setUserList([...newArr]);
    arr = newArr;
    setSort(prev => !prev);
  }

  let button;
    if(sort) {
        button = <div className="sort-container"><button onClick={() => sorted()}>Sort by newest</button></div>
    } else {
        button = <div className="sort-container"><button onClick={() => sortedDown()}>Sort by oldest</button></div>
    }
  return (
    <div>{button}</div>
  )
}
