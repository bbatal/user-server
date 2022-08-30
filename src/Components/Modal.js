import Character from "./Character"
import Form from "./Form"

export default function Modal({ update, character, setTurnOn }) {

  return (
    <div className="modal">
      <button className="close-modal" onClick={() => setTurnOn(prev => !prev)}>X</button>
      <div className="character"><Character character={character} /></div>
      <Form makeCall={update} character={character} term={"Update"} />
    </div>
  )
}
