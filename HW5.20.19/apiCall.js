let rootDiv = document.getElementById('root');
let container = document.createElement('div');

let theLogo = document.createElement('img');
theLogo.src = 'spman.jpg';


rootDiv.appendChild(theLogo);
rootDiv.appendChild(container);

let request = new XMLHttpRequest();
// get, post, delete, put, patch request

request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(user => {
            let card = document.createElement('div');
            let header1 = document.createElement('h1');
            header1.textContent = user.name;
            card.classList.add('w3-container','w3-border-white', 'w3-teal', 'w3-hover-amber')
            header1.classList.add('w3-center', 'w3-large');

            let username = document.createElement('h2');
            username.textContent = user.username;
            username.classList.add('w3-large','w3-text-bold')

            let email = document.createElement('h3');
            email.textContent = user.email;
            email.classList.add('w3-small')

            let phone = document.createElement('h3');
            phone.textContent = user.phone;
            phone.classList.add('w3-small', 'w3-right')

            container.appendChild(card);
            card.appendChild(header1);
            card.appendChild(username);
            card.appendChild(email);
            card.appendChild(phone);
        });
    } else {
        console.log('error');
        let errorMessage = document.createElement('marquee');
        errorMessage.textContent = 'Oh no! Its not working';
        rootDiv.appendChild(errorMessage);
    }
}
request.send();