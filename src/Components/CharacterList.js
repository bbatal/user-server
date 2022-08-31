import Character from "./Character";
import CharacterControls from "./CharacterControls";
import FilterComponent from "./FilterComponent";
// import withHOC from "./HOC";
import SortComponent from "./SortComponent";

function CharacterList({ userList, setUserList, setEditModal, loadCharacters }) {

  return (
    <div className="arr-functions">
    <SortComponent arr={userList} setUserList={setUserList} valueToSort={"dateAdded"} />
    <FilterComponent arr={userList} setUserList={setUserList} loadCharacters={loadCharacters} />
      <ul>
        <li>
          <p><em>Avatar</em></p>
          <p><em>Name</em></p>
          <p><em>Power</em></p>
          <p><em>LightSaber</em></p>
          <p><em>Side</em></p>
          {/* <SortComponent arr={data} setterFunction={setUserList} sortByVal={"dateAdded"} /> */}
        </li>
          {
          userList.map((character) => {
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
    </div>
    
  )
}

// const SearchUsers = withHOC(CharacterList, "users");

export default CharacterList;
