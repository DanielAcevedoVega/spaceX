import { galleryImageRocket, graphicsRocket, informationContaineRocket, informationContaineRocket2, sectionDescriptionRocekt, sectionInformationRocket, titleRocket } from "./components/rocket.js";
import { getDataRocket } from "./module/app.js"


let endpoint = 'rockets'
let page = 4

let data = await getDataRocket(page, endpoint)  

let title = document.querySelector('.header');
let sectionDescription = document.querySelector('.section__description');
let galleryImage = document.querySelector('.medium__gallery');
let graphics = document.querySelector('.medium__graphics__item');
let containerInformation = document.querySelector('.container');
let containerInformation2 = document.querySelector('.container2');
let sectionInfromation = document.querySelector('.section__information');

title.innerHTML = titleRocket(data)

sectionDescription.innerHTML = sectionDescriptionRocekt(data)

galleryImage.innerHTML = galleryImageRocket(data)

graphics.innerHTML =  graphicsRocket(data)

containerInformation.innerHTML = informationContaineRocket(data)

containerInformation2.innerHTML = informationContaineRocket2(data)

sectionInfromation.innerHTML =  sectionInformationRocket(data)