export const titleLandpads = (res)=>{
    let [data] = res.docs
    return /*html*/ `
        <div class="header__title">${data.full_name}</div>`;
} 

export const sectionDescriptionLandpads = (res)=>{
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

export const galleryImageLandpads = (res) =>{
    let [data] = res.docs
    return  /*html*/`
    <article>
        <img src="${data.images.large}" referrerpolicy="no-referrer">
    </article>`;
}

export const graphicsLandpads = (res)=>{
    let [data] = res.docs
    return /*html */`
    <div class="progress__bar" style="background: 
    radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
    conic-gradient(from 180deg, rgb(118, 189, 255) 100%, rgba(255, 192, 203, 0) 0);  ">
        <div>
            <strong>Latitude</strong>
            <p>${data.latitude}</p>
        </div>
    </div>
    <div class="progress__bar" style="background: 
                radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
                conic-gradient(from 180deg, rgb(118, 189, 255) 100%, rgba(255, 192, 203, 0) 0);  ">
            <div>
                <strong>Longitude</strong>
                <p>${data.longitude}</p>
            </div>
    </div>`;
} 

export const informationContaineLandpads = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">
        <h3>Information landpads</h3>
        <hr>
        <div>
            <article>
                <p>Name</p>
                <strong>${data.name}</strong>
            </article>
            <article>
                <p>Status</p>
                <strong>${data.status}</strong>
            </article>
            <article>
                <p>Type</p>
                <strong>${data.type}</strong>
            </article>
            <article>
                <p>Locality</p>
                <strong>${data.locality}</strong>
            </article>
            <article>
                <p>Region</p>
                <strong>${data.region}</strong>
            </article>
        </div>
    </div>`;
}

export const informationContaineLandpads2 = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">
        <h3>Landing information</h3>
        <hr>
        <div>
            <article>
                <p>landing attempts</p>
                <strong>${data.landing_attempts}</strong>
            </article>
            <article>
                <p>number of successful landings</p>
                <strong>${data.landing_successes}</strong>
            </article>
        </div>
    </div>`;
}

export const sectionInformationLandpads = (res) =>{
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