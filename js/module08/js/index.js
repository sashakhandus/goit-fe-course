document.addEventListener('DOMContentLoaded', () => {

    const gallery = document.querySelector('.js-image-gallery');
    const fullviewImg = document.querySelector('.fullview img');

    console.log(fullviewImg);

    gallery.addEventListener('click', onGalleryClick);

    function onGalleryClick({ target }) {
        const nodeName = target.nodeName;

        if (nodeName !== 'IMG') return;

        if (target !== fullviewImg) {

            const newFullviewSrc = target.getAttribute('data-fullview');

            fullviewImg.setAttribute('src', newFullviewSrc);
        } else {
            return;
        }

    };

    function showImageSrc(event) {
        console.log(event.target.src);
    };

});
