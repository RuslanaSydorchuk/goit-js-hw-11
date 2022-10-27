import {getImagesFromPixabay} from './pictures-api';
import {resetPageNumber} from './pictures-api';

import { createGallery } from './gallery-images-markup';
import { fullGallery } from './gallery-images-markup';

const refs = {
    searchForm: document.querySelector('.search-form'),
    loadMoreBtn: document.querySelector('.load-more'),
};

let request = "";

refs.searchForm.addEventListener('submit', onSearchBtnClick);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBthClick);

async function onSearchBtnClick(e){
    e.preventDeafault;
    request = e.currentTarget.elements.searchQuery.value;
    resetPageNumber();
    const imagesFromPixabay = await getImagesFromPixabay(request);
    createGallery(imagesFromPixabay);
};

async function onLoadMoreBthClick(e){
    const newImages = await getImagesFromPixabay(request);
    fullGallery(newImages);
}