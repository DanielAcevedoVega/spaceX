export const titleCore = (res)=>{
    let [data] = res.docs
    return /*html*/ `
        <div class="header__title">${data.serial}</div>`;
} 

export const sectionDescriptionCore = (res)=>{
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


export const informationContaineCore = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">
        <h3>Information core</h3>
        <hr>
        <div>
            <article>
                <p>Status</p>
                <strong>${data.status}</strong>
            </article>
            <article>
                <p>Block</p>
                <strong>${(data.block != null) ? data.block : 0}</strong>
            </article>
            <article>
                <p>Reuse Count</p>
                <strong>${data.reuse_count}</strong>
            </article>
        </div>
    </div>`;
}

export const informationContaineCore2 = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">  
        <h3>Core Stats</h3>
        <hr>
        <div>
            <article>
                <p>RTLS attempts</p>
                <strong>${data.rtls_attempts}</strong>
            </article>
            <article>
                <p>RTLS landings</p>
                <strong>${data.rtls_landings}</strong>
            </article>
            <article>
                <p>ASDS attempts</p>
                <strong>${data.asds_attempts}</strong>
            </article>
            <article>
                <p>ASDS landings</p>
                <strong>${data.asds_landings}</strong>
            </article>
        </div>
    </div>`;
}

export const sectionInformationCore = (res) =>{
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