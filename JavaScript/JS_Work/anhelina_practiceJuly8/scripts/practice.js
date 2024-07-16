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
        userDiv.innerHTML = `Name: ${user.name}<br>Age: ${user.age}`;
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
function mimeType() {
    const mimeMap = {
        'txt': 'text/plain', 'html': 'text/html', 'htm': 'text/html', 'css': 'text/css', 'js': 'text/javascript',
        'jpeg': 'image/jpeg', 'jpg': 'image/jpeg', 'gif': 'image/gif', 'bmp': 'image/bmp', 'ico': 'image/x-icon',
        'cur': 'image/x-icon', 'png': 'image/png', 'svg': 'image/svg+xml', 'webp': 'image/webp', 'mp3': 'audio/mp3',
        'wav': 'audio/wav', 'mp4': 'video/mp4', 'webm': 'video/webm', 'json': 'application/json', 'mpeg': 'video/mpeg',
        'csv': 'text/csv', 'ttf': 'font/ttf', 'woff': 'font/woff', 'zip': 'application/zip', 'avi': 'video/x-msvideo'
    };

    let mimeBox = document.querySelector('#mimeType');
    let fileNameInput = document.querySelector('#fileName');
    let fileName = fileNameInput.value.trim();

    if (fileName === '') {
        alert('Error, please enter a file name.');
        return;
    }

    let parts = fileName.split('.');
    let extension = parts[parts.length - 1].toLowerCase();

    if (extension in mimeMap) {
        let mimeType = mimeMap[extension];
        let outputMime = `Mime Type: <strong>${mimeType}</strong>`;
        mimeBox.innerHTML = outputMime;
    } else {
        alert('Error, please enter the right file name.');
        mimeBox.textContent = '';
    }
}