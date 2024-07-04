export const titleHistory = (res)=>{
    let [data] = res.docs
    return /*html*/ `
        <div class="header__title">${data.title}</div>`;
} 

export const sectionDescriptionHistory = (res)=>{
    let [data] = res.docs
    return /*html*/`
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Details about:</strong>
            <p>${data.details}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>UTC date and time of the event in Universal Time:</strong>
            <p>${data.event_date_utc}</p>
        </div>
    </article>
     <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>event time in Unix time format:</strong>
            <p>${data.event_date_unix}</p>
        </div>
    </article>`; 
}

export const galleryImageHistory = (res) =>{
    let [data] = res.docs
    return  /*html*/`
    <article>
        <h3>${(data.links.article != null) ? "Click to see the article: " : "No item available"}</h3>
       <a href="${data.links.article}" ${(data.links.article != null) ? 'class=""' : 'class="disabled"'} target="_blank"><img src="https://yaabot.com/wp-content/uploads/2022/12/yaabot_dec_2.png" referrerpolicy="no-referrer"></a>
    </article>`;
}

