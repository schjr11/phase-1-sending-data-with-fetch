function submitData(inputName, inputEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: inputName,
            email: inputEmail
        })
    })
    .then(resp => resp.json())
    .then(json => {
        const newItemId = json.id;
        const p = document.createElement('p')
        p.textContent = newItemId;
        const body = document.querySelector('body');
        body.append(p);
    })
    .catch(someError => {
        const p = document.createElement('p')
        p.textContent = someError.message;
        const body = document.querySelector('body');
        body.append(p);
    })
}