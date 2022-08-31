import Character from "./Character"
import { update } from "./Fetcher";
import Form from "./Form"

export default function Modal({ character, setTurnOn, loadCharacters }) {

  const makeUpdate = (e, data) => {
    e.preventDefault();
    update(data)
    .then(res => {
      if(res.ok) {
        loadCharacters();
      }
    })
      setTurnOn(prev => !prev);
  }

  return (
    <div className="modal">
      <button className="close-modal" onClick={() => setTurnOn(prev => !prev)}>X</button>
      <div className="character"><Character character={character} /></div>
      <Form makeCall={makeUpdate} character={character} term={"Update"} />
    </div>
  )
}
