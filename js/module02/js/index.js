const passwordTrue = 'qwerty123';
let indexPassword = 3;
let passwordUser;

do {
    passwordUser = prompt('Введите пароль: ');
    if (!passwordUser) {
        break;
    } else if (passwordUser === passwordTrue) {
        alert('Добро пожаловать!');
        break;
    } else if (passwordUser !== passwordTrue) {
        indexPassword = indexPassword - 1;
        alert(`Неверный пароль, у Вас осталось ${indexPassword} попыток.`);
    } 

} while ( indexPassword > 0 || passwordUser === passwordTrue )

if (indexPassword === 0) {
    alert('У Вас закончились попытки, аккаунт заблокирован.');
}
