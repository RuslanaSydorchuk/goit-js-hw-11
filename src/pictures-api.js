import axios from 'axios';

let pageNumber = 1;

const API_KEY = '30873583-a83216accfe2ef5ac8ade2ed1';

async function getImagesFromPixabay(request){
    try{
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageNumber}`;
        
        const response = await axios.get(url);
        const imagesFromPixabay = response.data;

        pageNumber +=1;

        return imagesFromPixabay;
    } catch(error){
        console.log(error);
    }
}

function resetPageNumber(){
    pageNumber = 1;
}

export {getImagesFromPixabay};
export {resetPageNumber};


