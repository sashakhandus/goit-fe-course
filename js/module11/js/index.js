'use strict';

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      releaseDate: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      releaseDate: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      releaseDate: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      releaseDate: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      releaseDate: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      releaseDate: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      releaseDate: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      releaseDate: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      releaseDate: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];

const form = document.querySelector('.js-form');
let inputs = document.querySelectorAll('input');
const result = document.querySelector(".js-result");

const btnSubmit = document.querySelector('.js-submit');
const btnReset = document.querySelector('.js-reset');

let inputsChecked = [];
let size = [];
let color = [];
let releaseDate = [];

let laptopsUser = [];

const resetResult = () => {
  size = [];
  color = [];
  releaseDate = [];
  result.innerHTML = '';
};

const handleFormSumit = e => {
    e.preventDefault();

  resetResult();
 
  console.log(inputs);

    inputs = Array.from(inputs);
    inputsChecked = inputs.filter( input => input.checked);
    console.log(inputsChecked);

    inputsChecked.forEach(input => {
        console.log(input.value);
        switch(input.name) {
            case 'size' :
                size.push(+input.value);
                break;
            case 'color' :
                color.push(input.value);
                break;
            case 'release_date' :
                releaseDate.push(+input.value);
                break;
        }
    });

    console.log(size);
    console.log(color);
    console.log(releaseDate);

    laptopsUser = laptops.filter(laptops => 
        size.includes(laptops.size) && color.includes(laptops.color) && releaseDate.includes(laptops.releaseDate)
    );

    console.log(laptopsUser);

    const source = document.querySelector('#card-temp').innerHTML.trim();
    const template = Handlebars.compile(source);

    const markup = laptopsUser.reduce((acc, lapt) => acc + template(lapt), '');;

    result.insertAdjacentHTML('afterbegin', markup);

};

form.addEventListener('submit', handleFormSumit);
btnReset.addEventListener('click', resetResult);
