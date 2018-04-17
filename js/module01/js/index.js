let numbersTaba = 6;
let numbersSharm = 15;
let numbersHurgada = 25;

let numbersUser = prompt('Введите необходимое число мест');

console.log(numbersUser);
console.log(typeof numbersUser);


if (typeof Number.parseInt(numbersUser) === 'number' && !Number.isNaN(numbersUser) && (Number.parseInt(numbersUser) > 0)) {
    if (numbersUser <= numbersTaba) {
       let answerUser = confirm ('Есть места в группе Taba. Вы согласны быть в этой группе?');
       if (answerUser) {
            numbersTaba = numbersTaba - numbersUser;
            alert('Приятного путешествия в группе Taba!');
       } else {
           if (numbersUser <= numbersSharm) {
                let answerUser = confirm ('Есть места в группе Sharm. Вы согласны быть в этой группе?');
                if (answerUser) {
                    numbersSharm = numbersSharm - numbersUser;
                    alert('Приятного путешествия в группе Sharm!');
                } else {
                    if (numbersUser <= numbersHurgada) {
                        let answerUser = confirm ('Есть места в группе Hurgada. Вы согласны быть в этой группе?');
                        if (answerUser) {
                            numbersHurgada = numbersHurgada - numbersUser;
                            alert('Приятного путешествия в группе Hurgada!');
                        } else {
                            alert('Изините, мест нет.');
                        }
                   }
               }
           }
       }
    } else {
        if (numbersUser <= numbersSharm) {
            let answerUser = confirm ('Есть места в группе Sharm. Вы согласны быть в этой группе?');
            if (answerUser) {
                numbersSharm = numbersSharm - numbersUser;
                alert('Приятного путешествия в группе Sharm!');
        } else {
            if (numbersUser <= numbersHurgada) {
                let answerUser = confirm ('Есть места в группе Hurgada. Вы согласны быть в этой группе?');
                if (answerUser) {
                    numbersHurgada = numbersHurgada - numbersUser;
                    alert('Приятного путешествия в группе Hurgada!');
             } else {
                 alert('Изините, мест нет.');
                }
            }
        }
    
   } else {
       if (numbersUser <= numbersHurgada) {
        let answerUser = confirm ('Есть места в группе Hurgada. Вы согласны быть в этой группе?');
        if (answerUser) {
            numbersHurgada = numbersHurgada - numbersUser;
            alert('Приятного путешествия в группе Hurgada!');
        } else {
            alert('Изините, мест нет.');
            }
        }
        else {
            alert('Изините, мест нет.');
        }
    }
}
} else {
    alert('Ошибка ввода.');
}