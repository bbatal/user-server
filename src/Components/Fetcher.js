
export function get() {
  return fetch("http://localhost:4000/users")
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
       console.log('Something went wrong with GET');
      }
   
  })
  .catch(err => console.log(err));
}

export function create(data) {
  return fetch('http://localhost:4000/user', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
             'Content-Type': 'application/json'
        }
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
       console.log('Something went wrong with POST');
      }
    }).catch(err => err);
}

export function update(data) {
  return fetch(`http://localhost:4000/user/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
             'Content-Type': 'application/json'
        }
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
       console.log('Something went wrong with PUT');
      }
    }).catch(err => err);
}

export function getChar(characterId) {
  return fetch(`http://localhost:4000/users/${characterId}`, {
        method: 'GET',
        headers: {
             'Content-Type': 'application/json'
        }
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
       console.log('This character does not exist');
      }
    }).catch(err => err);
}

export function remove(characterId) {
  return fetch(`http://localhost:4000/user/${characterId}`, {
        method: 'DELETE',
        headers: {
             'Content-Type': 'application/json'
        }
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
       console.log('Something went wrong with DELETE');
      }
    }).catch(err => err);
}