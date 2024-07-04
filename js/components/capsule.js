export const titleCapsule = (res)=>{
    let [data] = res.docs
    return /*html*/ `
        <div class="header__title">${data.serial}</div>`;
} 

export const sectionDescriptionCapsule = (res)=>{
    let [data] = res.docs
    return /*html*/`
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Last update:</strong>
            <p>${(data.last_update != null) ? data.last_update : "there is no information yet"}</p>
        </div>
    </article>`; 
}

export const galleryImageCapsule = () =>{
    return  /*html*/`
    <article>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/COTS2Dragon.6.jpg" referrerpolicy="no-referrer">
    </article>`;
}

export const informationContaineCapsule = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">
        <h3>Information capsule</h3>
        <hr>
        <div>
            <article>
                <p>Type</p>
                <strong>${data.type}</strong>
            </article>
            <article>
                <p>Status</p>
                <strong>${data.status}</strong>
            </article>
            <article>
                <p>Reuse Count</p>
                <strong>${data.reuse_count}</strong>
            </article>
        </div>
    </div>`;
}

export const informationContaineCapsule2 = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">  
        <h3>Landing information</h3>
        <hr>
        <div>
            <article>
                <p>Water Landings</p>
                <strong>${data.water_landings}</strong>
            </article>
            <article>
                <p>Land Landings</p>
                <strong>${data.land_landings}</strong>
            </article>
        </div>
    </div>`;
}

export const sectionInformationCapsule = (res) =>{
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