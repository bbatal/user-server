import Form from "./Components/Form";
import { Delete, Fetcher, get, Update } from './Components/Fetcher';
import CharacterList from "./Components/CharacterList";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import SearchUsers from "./Components/CharacterList";
// import SortComponent from "./Components/SortComponent";

function App() {

    const [userList, setUserList] = useState([]);
    const [turnOn, setTurnOn] = useState(false);
    const [character, setCharacter] = useState({
      id: '',
      avatar: '',
      name: '',
      power: '',
      lightsaber: '',
      side: '',
      dateAdded: 0
    });
    const newChar = {
      avatar: '',
      name: '',
      power: '',
      lightsaber: '',
      side: '',
      id: '',
      dateAdded: 0
    };
    
  

    const loadCharacters = async () => {
      const data = await get();
      setUserList(data);
    }

    useEffect(() => { loadCharacters() }, [])

  



  const setEditModal = async (id) => {

    const response = await fetch(`http://localhost:4000/users/${id}`);
    const character = await response.json();

    setCharacter(character);
    setTurnOn(prev => !prev);

  }


  const makeCall = (e,data) => {
    e.preventDefault();
    Fetcher(data)
    .then(res => {
      if(res.ok) {
        loadCharacters();
      }
    });
    // Fetcher()
  }

  const makeUpdate = (e, data) => {
    e.preventDefault();
    Update(data)
    .then(res => {
      if(res.ok) {
        loadCharacters();
      }
    })
      setTurnOn(prev => !prev);
  }

  

  return (
    <div className="App">
      {/* <CharacterList userList={userList} setUserList={setUserList} setEditModal={setEditModal} character={character} deleteUser={"deleteUser"} loadCharacters={loadCharacters}  /> */}
      <SearchUsers />
      <Form makeCall={makeCall} character={newChar} term={"create"} />

      {turnOn && <Modal character={character} update={makeUpdate} setTurnOn={setTurnOn} />}
    </div>
  );
}

export default App;
