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

export const graphicsRocket = (res)=>{
    let [data] = res.docs
    let porcentaje1 = (data.engines.thrust_sea_level.kN / 2000) * 100
    let porcentaje2 = (data.engines.thrust_vacuum.kN / 2000) * 100
    return /*html */`
    <div class="progress__bar" style="background: 
    radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
    conic-gradient(from 180deg, rgb(118, 189, 255) ${porcentaje1}%, rgba(255, 192, 203, 0) 0);  ">
        <div>
            <strong>Atmospheric acceleration</strong>
            <p>${porcentaje1} % </p>
            <p>${data.engines.thrust_sea_level.kN} kN</p>
            <p>${data.engines.thrust_sea_level.lbf} Lbf</p>
        </div>
    </div>
    <div class="progress__bar" style="background: 
                radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
                conic-gradient(from 180deg, rgb(118, 189, 255) ${porcentaje2}%, rgba(255, 192, 203, 0) 0);  ">
                    <div>
                        <strong>Speed in space</strong>
                        <p>${porcentaje2} % </p>
                        <p>${data.engines.thrust_vacuum.kN} kN</p>
                        <p>${data.engines.thrust_vacuum.lbf} Lbf</p>
                    </div>
                </div>
    <div class="progress__bar" style="background: 
                radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
                conic-gradient(from 180deg, rgb(118, 189, 255) ${data.success_rate_pct}%, rgba(255, 192, 203, 0) 0);  ">
                    <div>
                        <strong>Rate of success</strong>
                        <p>${data.success_rate_pct} % </p>
                    </div>
                </div>`;
} 