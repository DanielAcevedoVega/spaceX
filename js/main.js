import { galleryImageCapsule, informationContaineCapsule, informationContaineCapsule2, sectionDescriptionCapsule, sectionInformationCapsule, titleCapsule } from "./components/capsule.js";
import { galleryImageCompany, informationContaineCompany, informationContaineCompany2, sectionDescriptionCompany, sectionInformationCompany, titleCompany } from "./components/company.js";
import { informationContaineCore, informationContaineCore2, sectionDescriptionCore, sectionInformationCore, titleCore } from "./components/cores.js";
import { galleryImageCrew, informationContaineCrew, informationContaineCrew2, sectionDescriptionCrew, sectionInformationCrew, titleCrew } from "./components/crew.js";
import { galleryImageDragon, informationContaineDragon, informationContaineDragon2, sectionDescriptionDragon, sectionInformationDragon, titleDragon } from "./components/dragons.js";
import { galleryImageHistory, sectionDescriptionHistory, titleHistory } from "./components/history.js";
import { galleryImageLandpads, graphicsLandpads, informationContaineLandpads, informationContaineLandpads2, sectionDescriptionLandpads, sectionInformationLandpads, titleLandpads } from "./components/landpads.js";
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
                break;
            case 'company':
                updateCompanyContent(data);
                break;
            case 'cores':
                updateCoresContent(data);
                break;
            case 'crew':
                updateCrewContent(data);
                break;
            case 'dragons':
                updateDragonContent(data);
                break;
            case 'history':
                updateHistoryContent(data);
                break;
            case 'landpads':
                updateLandpadsContent(data);
                break;

                
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
    const updateCompanyContent = (data) =>{
        title.innerHTML = titleCompany(data)
        sectionDescription.innerHTML = sectionDescriptionCompany(data);
        galleryImage.innerHTML = galleryImageCompany(data);
        graphics.innerHTML = '';
        containerInformation.innerHTML = informationContaineCompany(data);
        containerInformation2.innerHTML = informationContaineCompany2(data);
        sectionInfromation.innerHTML = sectionInformationCompany(data);
    }
    const updateCoresContent = (data) =>{
        title.innerHTML = titleCore(data)
        sectionDescription.innerHTML = sectionDescriptionCore(data);
        galleryImage.innerHTML = '';
        graphics.innerHTML = '';
        containerInformation.innerHTML = informationContaineCore(data);
        containerInformation2.innerHTML = informationContaineCore2(data);
        sectionInfromation.innerHTML = sectionInformationCore(data);
    }
    const updateCrewContent = (data) =>{
        title.innerHTML = titleCrew(data)
        sectionDescription.innerHTML = sectionDescriptionCrew(data);
        galleryImage.innerHTML = galleryImageCrew(data);
        graphics.innerHTML = '';
        containerInformation.innerHTML = informationContaineCrew(data);
        containerInformation2.innerHTML = informationContaineCrew2(data);
        sectionInfromation.innerHTML = sectionInformationCrew(data);
    }
    const updateDragonContent = (data) =>{
        title.innerHTML = titleDragon(data)
        sectionDescription.innerHTML = sectionDescriptionDragon(data);
        galleryImage.innerHTML = galleryImageDragon(data);
        graphics.innerHTML = '';
        containerInformation.innerHTML = informationContaineDragon(data);
        containerInformation2.innerHTML = informationContaineDragon2(data);
        sectionInfromation.innerHTML = sectionInformationDragon(data);
    }
    const updateHistoryContent = (data) =>{
        title.innerHTML = titleHistory(data)
        sectionDescription.innerHTML = sectionDescriptionHistory(data);
        galleryImage.innerHTML = galleryImageHistory(data);
        graphics.innerHTML = '';
        containerInformation.innerHTML = '';
        containerInformation2.innerHTML = '';
        sectionInfromation.innerHTML = '';
    }
    const updateLandpadsContent = (data) => {
        title.innerHTML = titleLandpads(data);
        sectionDescription.innerHTML = sectionDescriptionLandpads(data);
        galleryImage.innerHTML = galleryImageLandpads(data);
        graphics.innerHTML = graphicsLandpads(data);
        containerInformation.innerHTML = informationContaineLandpads(data);
        containerInformation2.innerHTML = informationContaineLandpads2(data);
        sectionInfromation.innerHTML = sectionInformationLandpads(data);
    }

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






