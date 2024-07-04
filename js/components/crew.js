export const titleCrew = (res)=>{
    let [data] = res.docs
    return /*html*/ `
        <div class="header__title">${data.name}</div>`;
} 

export const sectionDescriptionCrew = (res)=>{
    let [data] = res.docs
    return /*html*/`
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Read more about:</strong>
            <a href="${data.wikipedia}" target="_blank">Wikipedia</a>
        </div>
    </article>`; 
}

export const galleryImageCrew = (res) =>{
    let [data] = res.docs
    return  /*html*/`
    <article>
        <img src="${data.image}" referrerpolicy="no-referrer">
    </article>`;
}

export const informationContaineCrew = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box" style="width: 70px;height: 70px;">
        <h3>Agency</h3>
        <hr>
        <div>
            <article>
                <strong>${data.agency}</strong>
            </article>
        </div>
    </div>`;
}

export const informationContaineCrew2 = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box" style="width: 70px;height: 70px;">  
        <h3>Status</h3>
        <hr>
        <div>
            <article>
                <strong>${data.status}</strong>
            </article>
        </div>
    </div>`;
}

export const sectionInformationCrew = (res) =>{
    let [data] = res.docs
    let articles = /*html*/`
    <article>
        <div>
            <strong>Launches: </strong>
        </div>
    </article>`;
    for(const art of data.launches){
        articles += /*html*/`
        <p>${art}</p>`;
    }
    return articles 
}