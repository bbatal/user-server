import React, { useState } from 'react';

const avatars = 
    [
        {val: "0010", name: "Darth Vader"},
        {val: "0023", name: "Storm Trooper"},
        {val: "0024", name: "Boba Fett"},
        {val: "0022", name: "Chewbacca"},
        {val: "0001", name: "Darth Sidious"},
        {val: "0013", name: "Padme Amidala"}
    ]

const powers = ["control", "alter", "sense", "force", "mind", "earth"];

function Form({ makeCall, term, character }) {
    const [formObj, setFormObj] = useState(character);

    const handleChange = (e) => {
        const newData = {...formObj};
        newData[e.target.name] = e.target.value;
        setFormObj(newData);
    }


  return (
    <form onSubmit={(e) => {makeCall(e, formObj); setFormObj(character)}}>
        <div className="form-group">
            <label htmlFor="avatar">Choose an avatar:</label>
            <select 
            name="avatar" 
            id="avatar"
            value={formObj.avatar} 
            onChange={e => handleChange(e)}>
                <option selected value={"default"}> -- select an option -- </option>
                {
                    avatars.map(char => {
                        return (
                            <option key={char.name} value={char.val}>
                                {char.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="name">name</label>
            <input 
            type="text" 
            name='name' 
            id='name' 
            value={formObj.name}
            onChange={e => handleChange(e)} />
        </div>

        <div className="form-group">
            <label htmlFor="power">Choose your superpower:</label>
            <select 
            name="power" 
            id="power" 
            value={formObj.power}
            onChange={e => handleChange(e)}>
                <option selected value={"default"}> -- select an option -- </option>
                {
                    powers.map((power) => {
                        return (
                            <option key={power} value={power}>
                                {power}
                            </option>
                        )
                    })
                }
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="lightsaber">lightsaber color</label>
            <input 
            type="text" 
            name='lightsaber' 
            id='lightsaber'
            value={formObj.lightsaber} 
            onChange={e => handleChange(e)} />
        </div>

        <div className='form-group'>
            <p>Which side of the force?</p>
            <label htmlFor="light">light</label>
            <input 
            type="radio" 
            name='side' 
            id='light' 
            value='light' 
            onChange={e => handleChange(e)} />

            <label htmlFor="dark">dark</label>
            <input 
            type="radio" 
            name='side' 
            id='dark' 
            value='dark' 
            onChange={e => handleChange(e)} />
        </div>

        <button type="submit">
            {term} user     
        </button>
    </form>
  )
}

export default Form;
