export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.init();
        this.view.init();

        this.view.on('add', this.addNote.bind(this));
        this.view.on('remove', this.removeNote.bind(this));
    }
  
    addNote({title, description, img, url}) {
        this.model.addItem({title, description, img, url}).then(item => this.view.addNote(item));
  
        console.log(this.model);
    }
  
    removeNote(id) {
      this.model.removeItem(id);
      this.view.removeNote(id);
      console.log(this.model);
    }
  }