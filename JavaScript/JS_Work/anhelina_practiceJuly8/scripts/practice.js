/***Question 1***/
let users = [];

function User(n, a) {
    this.name = n;
    this.age = a;
}
function makeObj(){
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const person = new User(name, age);
    users.push(person);

    // Clean fealds
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

function displayObj(){
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    // For each user desplay
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.textContent = `Name: ${user.name}, Age: ${user.age}`;
        userList.appendChild(userDiv);
    });
}
// Question: I already have some ussers out but I want to replace them with a new set 
// of users. How can I do it?

/***Question 2***/
function showJSON() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './data/user.json', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var jsonData = JSON.parse(xhr.responseText);

                // Format the JSON data into HTML
                let output = `<ul>
                                <li>Name: ${jsonData.name}</li>
                                <li>Email: ${jsonData.email}</li>
                                <li>Company: ${jsonData.company}</li>
                                <li>Address: ${jsonData.address}</li>
                              </ul>`;

                // Display the formatted data in the specified element
                var displayElement = document.querySelector("#q2");
                displayElement.innerHTML = output;
            } else {
                console.error('Failed to load JSON file.');
            }
        }
    };

    xhr.send();
}


/*** Question 3***/
