import React, { useEffect, useState, useCallback } from 'react'
import { get } from './Fetcher';

export default function FilterComponent({arr, setUserList}) {
    const[term, setTerm] = useState("");
    
    const loadCharacters = async () => {
      const data = await get();
      setUserList(filteredData(data));
    }

    useEffect(() => {
        loadCharacters()
    }, [term])

    const filteredData = useCallback(arr => arr.filter((user) => user.name.toLowerCase().includes(term)), [term]);


  return (
    <div>
         <label htmlFor="search">Search User</label>
                    <input
                        id="search"
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
    </div>
  )
}
