export const titleRocket = (res)=>{
    let [data] = res.docs
    return /*html*/ `
        <div class="header__title">${data.name}</div>`;
} 

export const sectionDescriptionRocekt = (res)=>{
    let [data] = res.docs
    return /*html*/`
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Description:</strong>
            <p>${data.description}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Rocket Country:</strong>
            <p>${data.country}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Cost per launch:</strong>
            <p>$ ${data.cost_per_launch}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Date of the first flight:</strong>
            <p>${data.first_flight}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Read more about the rocket:</strong>
            <a href="${data.wikipedia}" target="_blank">Wikipedia</a>
        </div>
    </article>`; 
}

export const galleryImageRocket = (res) =>{
    let [data] = res.docs
    let articles = "";
    for(const image of data.flickr_images){
        articles += /*html*/`
        <article>
            <img src="${image}" referrerpolicy="no-referrer">
        </article>`;
    }
    return articles 
}