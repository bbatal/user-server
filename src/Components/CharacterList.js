import Character from "./Character";
import CharacterControls from "./CharacterControls";
import HOC from "./HOC";
import SortComponent from "./SortComponent";

function CharacterList({ data, setUserList, setEditModal, loadCharacters }) {

  return (
    <ul>
      <li>
        <p><em>Avatar</em></p>
        <p><em>Name</em></p>
        <p><em>Power</em></p>
        <p><em>LightSaber</em></p>
        <p><em>Side</em></p>
        <SortComponent arr={data} setterFunction={setUserList} sortByVal={"dateAdded"} />
      </li>
        {
        data.map((character) => {
           return (
           <li key={character.id}>
              <Character character={character} />
              <CharacterControls 
                id={character.id} 
                setEditModal={setEditModal} 
                loadCharacters={loadCharacters}
                 />
           </li>
           )
        })
        }
    </ul>
  )
}

const SearchUsers = HOC(CharacterList, "users");

export default SearchUsers;
