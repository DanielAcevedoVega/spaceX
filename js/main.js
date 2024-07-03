import { galleryImageRocket, graphicsRocket, informationContaineRocket, informationContaineRocket2, sectionDescriptionRocekt, sectionInformationRocket, titleRocket } from "./components/rocket.js";
import { getAllData} from "./module/app.js"



let page = 1




let title = document.querySelector('.header');
let sectionDescription = document.querySelector('.section__description');
let galleryImage = document.querySelector('.medium__gallery');
let graphics = document.querySelector('.medium__graphics__item');
let containerInformation = document.querySelector('.container');
let containerInformation2 = document.querySelector('.container2');
let sectionInfromation = document.querySelector('.section__information');


// title.innerHTML = titleRocket(data)

// sectionDescription.innerHTML = sectionDescriptionRocekt(data)

// galleryImage.innerHTML = galleryImageRocket(data)

// graphics.innerHTML =  graphicsRocket(data)

// containerInformation.innerHTML = informationContaineRocket(data)

// containerInformation2.innerHTML = informationContaineRocket2(data)

// sectionInfromation.innerHTML =  sectionInformationRocket(data)

document.addEventListener('DOMContentLoaded', () => {
    const handleClick = async(e) => {
        e.preventDefault();
        const itemId = e.target.closest('li').id;
        const page = 1
        console.log(await getAllData(page, itemId))
    };
    const footerLinks = document.querySelectorAll('footer .select');

    footerLinks.forEach(link => {
        link.addEventListener('click', handleClick);
    });
});


