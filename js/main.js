import { galleryImageRocket, sectionDescriptionRocekt, titleRocket } from "./components/rocket.js";
import { getDataRocket } from "./module/app.js"


let endpoint = 'rockets'
let page = 1

let data = await getDataRocket(page, endpoint)

let title = document.querySelector('.header');
let sectionDescription = document.querySelector('.section__description');
let galleryImage = document.querySelector('.medium__gallery');

title.innerHTML = titleRocket(data)

sectionDescription.innerHTML = sectionDescriptionRocekt(data)

galleryImage.innerHTML = galleryImageRocket(data)

