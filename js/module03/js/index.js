const checkLoginValidity = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    };
};

const checkIfLoginExists = function (login) {
    if (logins.includes(login)) {
        return true;
    } else {
        return false;
    }
};

const addLogin = function (login) {
    if (checkLoginValidity(login)) {
        if (!checkIfLoginExists(login)) {
            logins.push(login);
            alert(login);
        } else {
            alert("Такой логин уже используется!");
            return ("Такой логин уже используется!");
        }
    } else {
        alert("Ошибка! Логин должен быть от 4 до 16 символов.");
        return ("Ошибка! Логин должен быть от 4 до 16 символов.");
    }
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

login = prompt("Введите логин: ");

addLogin(login);


