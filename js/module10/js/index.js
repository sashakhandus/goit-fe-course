'use strict';

const btnGetAllUsers = document.querySelector(".js-getAllUsers");
const btnGetUserById = document.querySelector(".js-getUserById");
const btnAddUser = document.querySelector(".js-addUser");
const btnRemoveUser = document.querySelector(".js-removeUser");
const btnUpdateUser = document.querySelector(".js-updateUser");

const form = document.querySelector('.form');

const result = document.querySelector(".js-result");
const apiUrl = "https://test-users-api.herokuapp.com/users/";

let id;
let name;
let age;

const handleFormSumit = e => {
    e.preventDefault();
   
    resetResult();
  };

const updateResult = markup => {
    result.insertAdjacentHTML('beforeend', markup);
};

const resetResult = () => {
    result.innerHTML = '';
};

const userById = (arr, id) => arr.find(x => x.id === id);

const fetchAllUsers = () => {
    console.log('AllUsers');
   return fetch(`${apiUrl}`)
    .then(response => {
        if (response.ok) {
            console.log(response);
            return response.json();
        }
        throw new Error('error: ' + response.statusText);
    })
    .then(data => {
        //console.log(data);
        return data.data;
        })
    .catch(error => console.log(error));
}

const createUsersList = (users) => {
    users = Array.from(users);
    console.log(users);
    let markup = `<tr class="headerTable"><th>ID</th><th>Name</th><th>Age</th></tr>`;
    //let user = {};
    users.forEach(user => {
        markup = markup + `<tr class="item"><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td></tr>`;
    });

    return markup;
};

const createUserList = (users, inputId) => {
    users = Array.from(users);
    const user = userById(users, inputId);
    console.log(user);
    let markup = `<li class="item">id: ${user.id}, name: ${user.name}, age: ${user.age}</li>`;
    return markup;
};

const getAllUsers = () => {
    fetchAllUsers().then(items => {
        const markup = createUsersList(items);
        updateResult(markup);
    });
};

const getUserById = () => {
    const inputId = document.querySelector(".js-inputId").value;
    fetchAllUsers().then(items => {
        const markup = createUserList(items, inputId);
        updateResult(markup);
    });
};

const addUser = () => {
    const inputUserName = document.querySelector(".js-inputUserName").value;
    const inputUserAge = document.querySelector(".js-inputUserAge").value;

    const newUser = {
        name: inputUserName,
        age: inputUserAge,
    };

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));
};

const removeUser = () => {
    const inputRemove = document.querySelector(".js-inputRemove").value;
    fetch(`${apiUrl}${inputRemove}`, {
        method: 'DELETE'})
        .then(() => alert('Remove user'))
        .catch(error => console.log('ERROR ' + error));
};

const updateUser = () => {
    const inputUpdateId = document.querySelector(".js-inputUpdateId").value;
    const inputUpdateName = document.querySelector(".js-inputUpdateName").value;
    const inputUpdateAge = document.querySelector(".js-inputUpdateAge").value;

    const userToUpdate = {
        id: inputUpdateId,
        name: inputUpdateName,
        age: inputUpdateAge,
    };

    fetch(`${apiUrl}${inputUpdateId}`, {
        method: "PUT",
        body: JSON.stringify(userToUpdate),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('ERROR' + error));
};

form.addEventListener('submit', handleFormSumit);
btnGetAllUsers.addEventListener("click", getAllUsers);
btnGetUserById.addEventListener("click", getUserById);
btnAddUser.addEventListener("click", addUser);
btnRemoveUser.addEventListener("click", removeUser);
btnUpdateUser.addEventListener("click", updateUser);