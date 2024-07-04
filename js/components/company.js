export const titleCompany = (res)=>{
    return /*html*/ `
        <div class="header__title">${res.name}</div>`;
} 

export const sectionDescriptionCompany = (res)=>{
    return /*html*/`
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Summary Company:</strong>
            <p>${res.summary}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Founder:</strong>
            <p>${res.founder}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Founded:</strong>
            <p>${res.founded}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Valuation:</strong>
            <p>$${new Intl.NumberFormat().format(res.valuation)}</p>
        </div>
    </article>`; 
}

export const galleryImageCompany = () =>{
    return  /*html*/`
    <article>
        <img src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/05/0/0/spacex.png?ve=1&tl=1" referrerpolicy="no-referrer">
    </article>`;
}

export const informationContaineCompany = (res) =>{
    return /*html*/`
    <div id = "text__box">
        <h3>Information company</h3>
        <hr>
        <div>
            <article>
                <p>Address</p>
                <strong>${res.headquarters.address}</strong>
            </article>
            <article>
                <p>City</p>
                <strong>${res.headquarters.city}</strong>
            </article>
            <article>
                <p>State</p>
                <strong>${res.headquarters.state}</strong>
            </article>
            <article>
                <p>CEO</p>
                <strong>${res.ceo}</strong>
            </article>
            <article>
                <p>CTO</p>
                <strong>${res.cto}</strong>
            </article>
            <article>
                <p>COO</p>
                <strong>${res.coo}</strong>
            </article>
            <article>
                <p>CTO Propulsion</p>
                <strong>${res.cto_propulsion}</strong>
            </article>
        </div>
    </div>`;
}

export const informationContaineCompany2 = (res) =>{
    return /*html*/`
    <div id = "text__box">  
        <h3>SpaceX Stats</h3>
        <hr>
        <div>
            <article>
                <p>Employees</p>
                <strong>${res.employees}</strong>
            </article>
            <article>
                <p>Vehicles</p>
                <strong>${res.vehicles}</strong>
            </article>
            <article>
                <p>Launch site number</p>
                <strong>${res.launch_sites}</strong>
            </article>
            <article>
                <p>Test site number</p>
                <strong>${res.test_sites}</strong>
            </article>
        </div>
    </div>`;
}

export const sectionInformationCompany = (res) =>{
    return /*html*/`
    <article class="article__description">
        <div class="description__div">
            <strong>Website:</strong>
            <a href="${res.links.website}" target="_blank"><img src="https://cdn-icons-png.freepik.com/512/5339/5339155.png"></a>
        </div>
    </article>
    <article class="article__description">
        <div class="description__div">
            <strong>Flickr:</strong>
            <a href="${res.links.flickr}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670080.png"></a>
        </div>
    </article>
    <article class="article__description">
        <div class="description__div">
            <strong>Twitter:</strong>
            <a href="${res.links.twitter}" target="_blank"><img src="https://i.pinimg.com/originals/00/80/3b/00803bd1621e40cd56883394a885f145.png"></a>
        </div>
    </article>
    <article class="article__description">
        <div class="description__div">
            <strong>Elon twitter:</strong>
            <a href="${res.links.elon_twitter}" target="_blank"><img src="https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"></a>
        </div>
    </article>`; 
}