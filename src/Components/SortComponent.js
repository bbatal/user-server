import { useState } from "react"

export default function SortComponent({ arr, setterFunction, sortByVal }) {

  const [sort, setSort] = useState(false);

  const sorted = () => {
    let newArr = arr.sort((a,b) => b[sortByVal] - a[sortByVal])
    setterFunction([...newArr])
    setSort(prev => !prev);
  }

  const sortedDown = () => {
    let newArr = arr.sort((a,b) => a[sortByVal] - b[sortByVal])
    setterFunction([...newArr])
    setSort(prev => !prev);
  }
  

  return (
    <>
    { sort ? <div className="btn-container"><button onClick={() => sortedDown()}>Sort by oldest</button></div> : <div className="btn-container"><button onClick={() => sorted()}>Sort by newest</button></div> }
    </>
    
  )
}
