import v4 from 'uuid/v4';

export default class Model {
    constructor(items = []) {
      this.items = items;
    }

addItem({title, description, img, url}) {
    const item = {
        id: v4(),
        title,
        description,
        img,
        url,
    };

    this.items.push(item);

    localStorage.setItem(`${item.id}`, JSON.stringify(item.url));

    return new Promise(resolve => {
        setTimeout(() => {
          resolve(item);
        }, 200);
    });
}

removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    localStorage.removeItem(`${id}`);
  }

init() {

    if (localStorage.length <= 0) return;

    let keys = Object.keys(localStorage);

    for (let i = 0; i < localStorage.length; i++) {
        let key = keys[i];
        let value = JSON.parse(localStorage.getItem(`${key}`));

        const item = {
            id: key,
            url: value,
        };
    
        this.items.push(item);
    };
}
}
