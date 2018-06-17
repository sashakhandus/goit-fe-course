document.addEventListener('DOMContentLoaded', () => {

    const galleryItems1 = [
        { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
        { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
        { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
        { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
        { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
        { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
    ];

    const galleryItems2 = [
        { preview: 'img/preview-7.jpeg', fullview: 'img/fullview-7.jpeg', alt: "alt text 7" },
        { preview: 'img/preview-8.jpeg', fullview: 'img/fullview-8.jpeg', alt: "alt text 8" },
        { preview: 'img/preview-9.jpeg', fullview: 'img/fullview-9.jpeg', alt: "alt text 9" },
        { preview: 'img/preview-10.jpeg', fullview: 'img/fullview-10.jpeg', alt: "alt text 10" },
    ];

    class Gallery {
        constructor ({items, parentNode, defaultActiveItem}) {
            this.items = items;
            this.parentNode = parentNode;
            this.defaultActiveItem = defaultActiveItem;
        };

        createElem (nameElem, classNameElem, parentElem = this.parentNode) {
            let elem = document.createElement(nameElem);
            elem.classList.add(classNameElem);
            parentElem.append(elem); 
            return elem; 
        };

        createGallery () {
            let div = gallery.createElem("div", "fullview");
            let ul = gallery.createElem("ul", "preview");
            let galleryItemsArr = Array.from(this.items);
            let img = gallery.createElem("img", "js-img", div);
            let activeItem = galleryItemsArr[this.defaultActiveItem-1];
            img.setAttribute("src", `${activeItem.fullview}`);
            img.setAttribute("width", "1280px");
            img.setAttribute("height", "850px");
            img.setAttribute("alt", "alt text 1");
            galleryItemsArr.forEach(function(item, index, arr) {
                let liItem = document.createElement("li");
                ul.append(liItem);
                let imgItem = document.createElement("img");
                imgItem.setAttribute("src", `${item.preview}`);
                imgItem.setAttribute("alt", `${item.alt}`);
                liItem.append(imgItem);
            })

            ul.addEventListener('click', function({target}) {
                let targetAlt = target.alt;
                let newFullview = galleryItemsArr.find(item => item.alt === targetAlt);
                img.removeAttribute("src");
                img.setAttribute("src", `${newFullview.fullview}`);
            });
            
        };

    }
      
    let gallery = new Gallery({
        items: galleryItems1,
        parentNode: document.querySelector('.image-gallery'),
        defaultActiveItem: 1,
    });

    gallery.createGallery();

    gallery = new Gallery({
        items: galleryItems2,
        parentNode: document.querySelector('.image-gallery'),
        defaultActiveItem: 3,
    })

    gallery.createGallery();

});
