'use strict';

let input = document.querySelector('input');
const form = document.querySelector(".js-form");
const result = document.querySelector(".js-result");
//const del = document.querySelectorAll(".js-delete");
const urls = [];
let length = localStorage.length;

const key = '5b59d33584e6fae9a803d3af560d2c956d877a148f277';

const ready = () => {
    if (localStorage.length !== 0) {
        console.log(localStorage.length);
        showStorage();
    }
}

const isValidUrl = url => {
    var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    return objRE.test(url);
}

const handleFormSumit = e => {
    e.preventDefault();
    let url = input.value;
    let lengthStorage = localStorage.length;

    if (urls.includes(url)) {
        alert('This url is already in the list!');
    //} else if (!isValidUrl(url)) {
        //alert('This url is not valid!');
    } else {
        urls.push(url);
        console.log(urls);
        console.log(lengthStorage);
        localStorage.setItem(`app-url${lengthStorage}`, JSON.stringify(url));
        fetchUrl(url);
    };
    input.value = "";
}

const fetchUrl = url =>
    fetch(
        `https://api.linkpreview.net/?key=${key}&q=https://${url}`
    )
    .then(res => res.json())
    .then(data => {

        let newUrl = [];

        newUrl = {
            title: data.title,
            description: data.description,
            img: data.image,
            url: data.url,
        }
        showUrl(newUrl);
    })
    .catch(err => console.log(err));

const showUrl = (newUrl) => {
    const source = document.querySelector('#card-temp').innerHTML.trim();
    const template = Handlebars.compile(source);  
    const markup = template(newUrl);
    
    result.insertAdjacentHTML('afterbegin', markup); 

    const card = result.querySelector('div');
    const descrTitle = card.querySelector('.descrTitle');
    const descr = card.querySelector('.descr');

    if (newUrl.title === '') {
        descrTitle.remove();
    };

    if (newUrl.description === '') {
        descr.remove();
    };
} 

const showStorage = () => {
    for (let i = 0; i < length; i ++ ) {
        const urlfromLs= JSON.parse(localStorage.getItem(`app-url${i}`)); 
        fetchUrl(urlfromLs);
    }
}

const delCard = e => {
    e.preventDefault();

    const event = e.target;
    console.log(event);
    console.log(!event.classList.contains("cardButton"));
  
    if (!event.classList.contains("cardButton")) {
        return;
    } else {
        const eventParent = event.parentNode;
        //const eventChildren = eventParent.children;
        const thisUrl = eventParent.querySelector(".descrUrl");
        const thisElem = thisUrl.textContent.split(' ')[1].slice(8, -1);
        let newIndex;
        let length1 = localStorage.length;

    for (let i = 0; i < length1; i++) {
       
        let value = localStorage.getItem(`app-url${i}`);
        console.log(`app-url${i}`, value);
        let newValue = value.slice(1, -1);
        console.log(newValue);
        console.log(thisElem.includes(newValue));

       if (thisElem.includes(newValue)) {
           localStorage.removeItem(`app-url${i}`);
           newIndex = i;
           console.log(i);
       };
    };

    for (let i = newIndex; i < length1; i++) {
        let value = localStorage.getItem(`app-url${i + 1}`);
        localStorage.setItem(`app-url${i}`, value);
    };

    localStorage.removeItem(`app-url${length1 - 1}`);

    eventParent.remove();

    };
}

document.addEventListener("DOMContentLoaded", ready);
form.addEventListener('submit', handleFormSumit);
result.addEventListener('click', delCard);