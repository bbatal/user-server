import Form from "./Components/Form";
import { get, create } from './Components/Fetcher';
import CharacterList from "./Components/CharacterList";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
// import SearchUsers from "./Components/CharacterList";
// import SortComponent from "./Components/SortComponent";

const newChar = {
      avatar: '',
      name: '',
      power: '',
      lightsaber: '',
      side: '',
      id: '',
      dateAdded: 0
    };

function App() {

    const [userList, setUserList] = useState([]);
    const [turnOn, setTurnOn] = useState(false);
    const [character, setCharacter] = useState(newChar);

    
    const loadCharacters = async () => {
      const data = await get();
        if(data) {
        setUserList(data);
      }
     
      }

    useEffect(() => { loadCharacters() }, [])

  
    const setEditModal = async (id) => {  
      console.log('hello');
      const response = await fetch(`http://localhost:4000/users/${id}`);
      const character = await response.json();

      setCharacter(character);
      setTurnOn(prev => !prev);

      }


    const makeCall = (e,data) => {
      e.preventDefault();
      create(data)
      .then(res => {
        if(res.ok) {
          loadCharacters();
        }
      });
      }



  

  return (
    <div className="App">
      <CharacterList userList={userList} setUserList={setUserList} setEditModal={setEditModal} character={character} loadCharacters={loadCharacters}  />
      {/* <SearchUsers setEditModal={setEditModal} userList={userList} /> */}
      <Form makeCall={makeCall} character={newChar} term={"create"} />

      {turnOn && <Modal character={character} loadCharacters={loadCharacters} setTurnOn={setTurnOn} />}
    </div>
  );
}

export default App;
