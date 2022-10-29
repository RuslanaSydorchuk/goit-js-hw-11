import {getImagesFromPixabay} from './pictures-api';
import {resetPageNumber} from './pictures-api';

import { createGallery } from './gallery-images-markup';
import { fullGallery } from './gallery-images-markup';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    searchForm: document.querySelector('.search-form'),
    loadMoreBtn: document.querySelector('.load-more'),
};

let lightbox;
let request = "";

refs.searchForm.addEventListener('submit', onFormSubmitClick);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBthClick);

async function onFormSubmitClick(e){
    e.preventDefault();
    request = e.currentTarget.elements.searchQuery.value;
    resetPageNumber();
    const imagesFromPixabay = await getImagesFromPixabay(request);
    createGallery(imagesFromPixabay);
    lightbox = new SimpleLightbox ('.gallery, a')
};

async function onLoadMoreBthClick(e){
    e.preventDefault();
    const nextImages = await getImagesFromPixabay(request);
    fullGallery(nextImages);
    lightbox.refresh();
    console.log("click on btn");
}