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
    </article>`; 
}

export const galleryImageRocket = (res) =>{
    let [data] = res.docs
    console.log(data.flickr_images)
    let articles = "";
    for(const image of data.flickr_images){
        articles += /*html*/`
        <article>
            <img src="${image}" referrerpolicy="no-referrer">
        </article>`;
    }
    return articles 
}