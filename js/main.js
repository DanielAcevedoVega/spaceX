import { galleryImageCapsule, informationContaineCapsule, informationContaineCapsule2, sectionDescriptionCapsule, sectionInformationCapsule, titleCapsule } from "./components/capsule.js";
import { galleryImageRocket, graphicsRocket, informationContaineRocket, informationContaineRocket2, sectionDescriptionRocekt, sectionInformationRocket, titleRocket } from "./components/rocket.js";
import { getAllData} from "./module/app.js"


let title = document.querySelector('.header');
let sectionDescription = document.querySelector('.section__description');
let galleryImage = document.querySelector('.medium__gallery');
let graphics = document.querySelector('.medium__graphics__item');
let containerInformation = document.querySelector('.container');
let containerInformation2 = document.querySelector('.container2');
let sectionInfromation = document.querySelector('.section__information');


document.addEventListener('DOMContentLoaded', async () => {
    let currentPage = 1;  
    let totalPages = 1;   
    const pageSize = 4;   

    let endpoint = 'rockets';  

    const updateContent = async (page) => {
        const data = await getAllData(page, endpoint);
        console.log(data);

        switch(endpoint){
            case 'rockets':
                updateRocketContent(data);
                break;
            case 'capsules':
                updateCapsuleContent(data);
        }
        // title.innerHTML = titleRocket(data);
        // sectionDescription.innerHTML = sectionDescriptionRocekt(data);
        // galleryImage.innerHTML = galleryImageRocket(data);
        // graphics.innerHTML = graphicsRocket(data);
        // containerInformation.innerHTML = informationContaineRocket(data);
        // containerInformation2.innerHTML = informationContaineRocket2(data);
        // sectionInfromation.innerHTML = sectionInformationRocket(data);

        
        totalPages = data.totalPages;
        updatePagination(page);
    };

    const updateRocketContent = (data) => {
        title.innerHTML = titleRocket(data);
        sectionDescription.innerHTML = sectionDescriptionRocekt(data);
        galleryImage.innerHTML = galleryImageRocket(data);
        graphics.innerHTML = graphicsRocket(data);
        containerInformation.innerHTML = informationContaineRocket(data);
        containerInformation2.innerHTML = informationContaineRocket2(data);
        sectionInfromation.innerHTML = sectionInformationRocket(data);
    };
    const updateCapsuleContent = (data) => {
        title.innerHTML = titleCapsule(data);
        sectionDescription.innerHTML = sectionDescriptionCapsule(data);
        galleryImage.innerHTML = galleryImageCapsule(data);
        graphics.innerHTML = '';
        containerInformation.innerHTML = informationContaineCapsule(data);
        containerInformation2.innerHTML = informationContaineCapsule2(data);
        sectionInfromation.innerHTML = sectionInformationCapsule(data);
    };

    const createPageLink = (page, currentPage) => {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = page;
        if (page === currentPage) {
            pageLink.classList.add('active');
        }
        pageLink.addEventListener('click', async (e) => {
            e.preventDefault();
            currentPage = page;
            await updateContent(currentPage);
        });
        return pageLink;
    };

    const updatePagination = (currentPage) => {
        const paginationContainer = document.querySelector('#pagination');
        paginationContainer.innerHTML = '';
    
        if(totalPages > 1){
            const prevButton = document.createElement('a');
            prevButton.href = '#';
            prevButton.textContent = 'Prev';
            prevButton.addEventListener('click', async (e) => {
                e.preventDefault();
                if (currentPage > 1) {
                    currentPage--;
                } else {
                    currentPage = totalPages; 
                }
                updatePagination(currentPage);
                await updateContent(currentPage);
            });
            paginationContainer.appendChild(prevButton);

            const startPage = Math.max(1, currentPage - Math.floor(pageSize / 2));
            const endPage = Math.min(totalPages, startPage + pageSize - 1);
        
            for (let i = startPage; i <= endPage; i++) {
                paginationContainer.appendChild(createPageLink(i, currentPage));
            }

            const nextButton = document.createElement('a');
            nextButton.href = '#';
            nextButton.textContent = 'Next';
            nextButton.addEventListener('click', async (e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                    currentPage++;
                } else {
                    currentPage = 1; 
                }
                updatePagination(currentPage);
                await updateContent(currentPage);
            });
            
            paginationContainer.appendChild(nextButton);
        }
    };

    await updateContent(currentPage);
    const footerLinks = document.querySelectorAll('footer .select');
    footerLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            endpoint = e.target.closest('li').id;
            currentPage = 1;  
            await updateContent(currentPage);
        });
    });
});






