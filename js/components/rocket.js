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
            <p>$ ${new Intl.NumberFormat().format(data.cost_per_launch)}</p>
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
            <p>${new Intl.NumberFormat().format(data.engines.thrust_sea_level.kN)} kN</p>
            <p>${new Intl.NumberFormat().format(data.engines.thrust_sea_level.lbf)} Lbf</p>
        </div>
    </div>
    <div class="progress__bar" style="background: 
                radial-gradient(closest-side, rgb(31, 31, 31) 79%, transparent 80% 100%),
                conic-gradient(from 180deg, rgb(118, 189, 255) ${porcentaje2}%, rgba(255, 192, 203, 0) 0);  ">
                    <div>
                        <strong>Speed in space</strong>
                        <p>${porcentaje2} % </p>
                        <p>${new Intl.NumberFormat().format(data.engines.thrust_vacuum.kN)} kN</p>
                        <p>${new Intl.NumberFormat().format(data.engines.thrust_vacuum.lbf)} Lbf</p>
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

export const informationContaineRocket = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">
        <h3>Information rocket</h3>
        <hr>
        <div>
            <article>
                <p>Type</p>
                <strong>${data.type}</strong>
            </article>
            <article>
                <p>Rocket in service</p>
                <strong>${(data.active == true) ? "Active" : "Low" }</strong>
            </article>
            <article>
                <p>Number of stages</p>
                <strong>${data.stages}</strong>
            </article>
            <article>
                <p>Number of propellants</p>
                <strong>${data.boosters}</strong>
            </article>
            <article>
                <p>Landing legs</p>
                <strong>${data.landing_legs.number}</strong>
            </article>
            <article>
                <p>Leg material</p>
                <strong>${(data.landing_legs.material != null) ? data.landing_legs.material : "" }</strong>
            </article>
        </div>
    </div>`;
}

export const informationContaineRocket2 = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">  
        <h3>Engine information</h3>
        <hr>
        <div>
            <article>
                <p>Type</p>
                <strong>${data.engines.type} ${data.engines.version}</strong>
            </article>
            <article>
                <p>Maximum power loss</p>
                <strong>${(data.engines.engine_loss_max != null) ? data.engines.engine_loss_max : 0}</strong>
            </article>
            <article>
                <p>Engine availability</p>
                <strong>${(data.engines.layout != null) ? data.engines.layout : ""}</strong>
            </article>
            <article>
                <p>Number of engines</p>
                <strong>${data.engines.number}</strong>
            </article>
            <article>
                <p>Stage 1 fuel</p>
                <strong>${data.engines.propellant_1}</strong>
            </article>
            <article>
                <p>Stage 2 fuel</p>
                <strong>${data.engines.propellant_2}</strong>
            </article>
        </div>
    </div>`;
}

export const sectionInformationRocket = (res) =>{
    let [data] = res.docs
    let plantilla = /*html*/`
    <article>
        <div>
            <strong>Rocket Weight: </strong>
            <progress value="${data.mass.kg}" max="${data.mass.lb}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.mass.kg)} kg</p>
                <p>${new Intl.NumberFormat().format(data.mass.lb)} lb</p>
            </div>
        </div>
    </article>
    <article>
        <div>
            <strong>Rocket Height: </strong>
            <progress value="${data.height.meters}" max="${data.height.feet}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.height.meters)} M</p>
                <p>${new Intl.NumberFormat().format(data.height.feet)} F</p>
            </div>
        </div>
    </article>
    <article>
        <div>
            <strong>Rocket Diameter: </strong>
            <progress value="${data.diameter.meters}" max="${data.diameter.feet}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.diameter.meters)} M</p>
                <p>${new Intl.NumberFormat().format(data.diameter.feet)} F</p>
            </div>
        </div>
    </article>
    <article>
        <div>
            <strong>Height rocket shield: </strong>
            <progress value="${data.second_stage.payloads.composite_fairing.height.meters}" max="${data.second_stage.payloads.composite_fairing.height.feet}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.second_stage.payloads.composite_fairing.height.meters)} M</p>
                <p>${new Intl.NumberFormat().format(data.second_stage.payloads.composite_fairing.height.feet)} F</p>
            </div>
        </div>
    </article>
    <article>
    <div>
        <strong>Diameter Rocket Shield: </strong>
        <progress value="${data.second_stage.payloads.composite_fairing.diameter.meters}" max="${data.second_stage.payloads.composite_fairing.diameter.feet}"></progress>
    </div>
    <div>
        <div>
            <p>${new Intl.NumberFormat().format(data.second_stage.payloads.composite_fairing.diameter.meters)} M</p>
            <p>${new Intl.NumberFormat().format(data.second_stage.payloads.composite_fairing.diameter.feet)} F</p>
        </div>
    </div>
    </article>`;
    for(const value of data.payload_weights){
        plantilla += /*html*/`
        <article>
            <div>
                <strong>${value.name}: </strong>
                <progress value="${value.kg}" max="${value.lb}"></progress>
            </div>
            <div>
                <div>
                    <p>${new Intl.NumberFormat().format(value.kg)} kg</p>
                    <p>${new Intl.NumberFormat().format(value.lb)} lb</p>
                </div>
            </div>
        </article>`;
    }
    return plantilla
}
