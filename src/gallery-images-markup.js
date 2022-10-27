import Notiflix from 'notiflix';

const refs ={
    loadMoreBtn: document.querySelector('.load-more'),
    gallery: document.querySelector('.gallery'),
}

// const loadMoreBtn = document.querySelector('.load-more');
// const gallery = document.querySelector('.gallery');

function makeloadMoreBtnVisible(){
    refs.loadMoreBtn.classList.remove('is-hidden')
};
function makeloadMoreBtnInvisible(){
    refs.loadMoreBtn.classList.add('is-hidden')
};

function galleryMarkup(images){
return images.map((image) =>{
    const smallImage = image.webformatURL;
    const largeImage = image.largeImageURL;
    const description = image.tags;
    const likesAmount = image.likes;
    const viewsAmount = image.views;
    const commentsAmount = image.comments;
    const downloadsAmount = image.downloads;


    const imageThumbMarkup = `
<a class="photo-card" href = "${largeImage}">
        <img class = "card-image" src="${smallImage}" 
        alt="${description}" loading="lazy" />

    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${likesAmount}
        </p>
        <p class="info-item">
            <b>Views</b>
            ${viewsAmount}
        </p>
        <p class="info-item">
            <b>Comments</b>
            ${commentsAmount}
        </p>
        <p class="info-item">
            <b>Downloads</b>
            ${downloadsAmount}
        </p>
    </div>
</a>`

    return imageThumbMarkup
}).join("");
};

function allocateGalleryMarkup(markup){
    gallery.innerHTML = markup
};

function createGallery(imagesFromPixabay){
    if(imagesFromPixabay.hits.length === 0){
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        gallery.innerHTML = "";
        return;
    }

    const fieldGallery = galleryMarkup(imagesFromPixabay.hits);
    allocateGalleryMarkup(fieldGallery);
    makeloadMoreBtnVisible();
};

function fullGallery (){
    const moreImages = galleryMarkup(imagesFromPixabay.hits);
    if(imagesFromPixabay.hits.length < 40){
        makeloadMoreBtnInvisible()
    }
    gallery.insertAdjacentHTML('beforeend', moreImages)
} 

export { createGallery }
export { fullGallery }


// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
