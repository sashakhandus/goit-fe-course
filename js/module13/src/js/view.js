import EventEmitter from '../services/event-emitter';

export default class View extends EventEmitter {
    constructor() {
      super();
  
      this.form = document.querySelector('.form');
      this.input = this.form.querySelector('.input');
      this.notesGrid = document.querySelector('.result');

      document.addEventListener("DOMContentLoaded", this.ready);
  
      this.form.addEventListener('submit', this.handleAdd.bind(this));
      this.init = this.init.bind(this);
    }

    isValidUrl(url) {
        var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
        return objRE.test(url);
    }

    valueInItems(value) {
        let keys = Object.keys(localStorage);
       
       for (let i = 0; i < localStorage.length; i++) {
            let key = keys[i];
            let valueStorage = JSON.parse(localStorage.getItem(`${key}`));
            
            if (valueStorage.includes(value)) return true;
        }
        return false;
    }

    handleAdd(evt) {
        evt.preventDefault();
    
        const { value } = this.input;
    
        if (value === '') return;

        if (!this.isValidUrl(value)) {
            alert('This url is not valid!');
            this.form.reset();
            return;
        }

        if (this.valueInItems(value)) {
            alert('This url is use!');
            this.form.reset();
            return;
        }

        const keyApi = '5b59d33584e6fae9a803d3af560d2c956d877a148f277';
        fetch(
            `https://api.linkpreview.net/?key=${keyApi}&q=https://${value}`
        )
        .then(res => res.json())
        .then(data => {

            if(!(data.error == 424)) {
                let newUrl = {
                    title: data.title,
                    description: data.description,
                    img: data.image,
                    url: data.url,
                };
    
    
                this.emit('add', newUrl);
            } else {
                alert('This url is not valid!');
                this.form.reset();
            };
           
        })
        .catch(err => console.log(err));
      }
    

    createNote(note) {

        const item = document.createElement('div');
        item.dataset.id = note.id;
        item.classList.add('item');
    
        const title = document.createElement('p');
        title.textContent = note.title;
        title.classList.add('descrTitle');

        const descr = document.createElement('p');
        descr.textContent = note.description;
        descr.classList.add('descr');

        const descrUrl = document.createElement('p');
        descrUrl.textContent = note.url;
        descrUrl.classList.add('descrUrl');

        const img = document.createElement('img');
        img.classList.add('img');
        img.setAttribute('src', note.img);
    
        const actions = document.createElement('div');
        actions.classList.add('actions');
    
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Delete';
        buttonRemove.dataset.action = 'remove';
        buttonRemove.classList.add('deleteButton');
    
        actions.append(buttonRemove);
    
        item.append(title, descr, descrUrl, img, buttonRemove);
    
        this.appendEventListners(item);
    
        return item;
      }

    addNote(note) {
        const item = this.createNote(note);
    
        this.form.reset();
        
        this.notesGrid.appendChild(item);
    }

    appendEventListners(item) {
        const removeBtn = item.querySelector(`[data-action="remove"]`);
    
        removeBtn.addEventListener('click', this.handleRemove.bind(this));
      }

    handleRemove({ target }) {
        const parent = target.closest('.item');
    
        this.emit('remove', parent.dataset.id);
      }

    removeNote(id) {
        const item = this.notesGrid.querySelector(`[data-id="${id}"]`);
        this.notesGrid.removeChild(item);
      }

    init() {
        if (localStorage.length <= 0) return;

        let keys = Object.keys(localStorage);
                    
        function getFetch(keyApi, value, key) {
            return fetch(
            `https://api.linkpreview.net/?key=${keyApi}&q=https://${value}`
        )
        .then(res => res.json())
        .then(data => {
            
            let newUrl = [];
            
            newUrl = {
                id: key,
                title: data.title,
                description: data.description,
                img: data.image,
                url: data.url,
            };
    
            return newUrl;
        })
        .catch(err => console.log(err));
        }

        for (let i = 0; i < localStorage.length; i++) {
            let key = keys[i];
            let value = JSON.parse(localStorage.getItem(`${key}`));
    
            const keyApi = '5b59d33584e6fae9a803d3af560d2c956d877a148f277';
               
            getFetch(keyApi, value, key).then(item => {
                const element = this.createNote(item);
                this.notesGrid.appendChild(element);
            })
        };
    }

}