import React from 'react';
import { remove } from './Fetcher';

export default function CharacterControls({ id, setEditModal, loadCharacters }) {

    const deleteUser = async (id) => {
    const response = await remove(id);

    if(response.ok) {
      loadCharacters();
    }
  }
  return (
    <div className="btn-container">
          <button onClick={() => setEditModal(id)}>update</button>
          <button onClick={() => deleteUser(id)}>delete</button>
    </div>
  )
}
