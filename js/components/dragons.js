export const titleDragon = (res)=>{
    let [data] = res.docs
    return /*html*/ `
        <div class="header__title">${data.name}</div>`;
} 

export const sectionDescriptionDragon = (res)=>{
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
            <strong>Date of the first flight:</strong>
            <p>${data.first_flight}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Read more about the dragon:</strong>
            <a href="${data.wikipedia}" target="_blank">Wikipedia</a>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Diameter:</strong>
            <p>${data.diameter.meters} M, ${data.diameter.feet} F</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>Trunk:</strong>
            <p>Volumen: ${data.trunk.trunk_volume.cubic_meters} M³, ${data.trunk.trunk_volume.cubic_feet} F³</p>
            <p>Panel Solar: ${data.trunk.cargo.solar_array}</p>
            <p>Unpressurized Cargo: ${data.trunk.cargo.unpressurized_cargo}</p>
        </div>
    </article>
    <article class="article__description">
        <img src="storage/img/icon.svg">
        <div class="description__div">
            <strong>height of the ship with the trunk:</strong>
            <p>${data.height_w_trunk.meters} M, ${data.height_w_trunk.feet} F</p>
        </div>
    </article>`; 
}

export const galleryImageDragon = (res) =>{
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

export const informationContaineDragon = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">
        <h3>Information dragon</h3>
        <hr>
        <div>
            <article>
                <p>Type</p>
                <strong>${data.type}</strong>
            </article>
            <article>
                <p>Dragon in service</p>
                <strong>${(data.active == true) ? "Active" : "Low" }</strong>
            </article>
            <article>
                <p>Number of crew capacity</p>
                <strong>${data.crew_capacity}</strong>
            </article>
            <article>
                <p>Sidewall angle</p>
                <strong>${data.sidewall_angle_deg}</strong>
            </article>
            <article>
                <p>Years of orbit</p>
                <strong>${data.orbit_duration_yr}</strong>
            </article>
            <article>
                <p>Dry mass</p>
                <strong>${data.dry_mass_kg} kg, ${data.dry_mass_lb} lb</strong>
            </article>
        </div>
    </div>`;
}

export const informationContaineDragon2 = (res) =>{
    let [data] = res.docs
    return /*html*/`
    <div id = "text__box">  
        <h3>Heat shield</h3>
        <hr>
        <div>
            <article>
                <p>Material</p>
                <strong>${data.heat_shield.material}</strong>
            </article>
            <article>
                <p>Size Meters</p>
                <strong>${data.heat_shield.size_meters}</strong>
            </article>
            <article>
                <p>Temp Degrees</p>
                <strong>${data.heat_shield.temp_degrees}</strong>
            </article>
            <article>
                <p>Dev Partner</p>
                <strong>${data.heat_shield.dev_partner}</strong>
            </article>
        </div>
    </div>`;
}

export const sectionInformationDragon = (res) =>{
    let [data] = res.docs
    let plantilla = /*html*/`
    <article>
        <div>
            <strong>Launch Payload Mass: </strong>
            <progress value="${data.launch_payload_mass.kg}" max="${data.launch_payload_mass.lb}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.launch_payload_mass.kg)} kg</p>
                <p>${new Intl.NumberFormat().format(data.launch_payload_mass.lb)} lb</p>
            </div>
        </div>
    </article>
    <article>
        <div>
            <strong>Launch Payload Volumen: </strong>
            <progress value="${data.launch_payload_vol.cubic_meters}" max="${data.launch_payload_vol.cubic_feet}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.launch_payload_vol.cubic_meters)} M³</p>
                <p>${new Intl.NumberFormat().format(data.launch_payload_vol.cubic_feet)} F³</p>
            </div>
        </div>
    </article>
    <article>
        <div>
            <strong>Return Payload Mass: </strong>
            <progress value="${data.return_payload_mass.kg}" max="${data.return_payload_mass.lb}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.return_payload_mass.kg)} kg</p>
                <p>${new Intl.NumberFormat().format(data.return_payload_mass.lb)} lb</p>
            </div>
        </div>
    </article>
    <article>
        <div>
            <strong>Return Payload Volumen: </strong>
            <progress value="${data.return_payload_vol.cubic_meters}" max="${data.return_payload_vol.cubic_feet}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.return_payload_vol.cubic_meters)} M³</p>
                <p>${new Intl.NumberFormat().format(data.return_payload_vol.cubic_feet)} F³</p>
            </div>
        </div>
    </article>
    <article>
        <div>
            <strong>Pressurized Capsule Volumen: </strong>
            <progress value="${data.pressurized_capsule.payload_volume.cubic_meters}" max="${data.pressurized_capsule.payload_volume.cubic_feet}"></progress>
        </div>
        <div>
            <div>
                <p>${new Intl.NumberFormat().format(data.pressurized_capsule.payload_volume.cubic_meters)} M³</p>
                <p>${new Intl.NumberFormat().format(data.pressurized_capsule.payload_volume.cubic_feet)} F³</p>
            </div>
        </div>
    </article>`;
    for(const value of data.thrusters){
        plantilla += /*html*/`
        <article class="article__description">
            <div class="description__div">
                <strong>${value.type}:</strong>
                <p>Amount: ${value.amount}</p>
                <p>Pods: ${value.pods}</p>
                <p>1 fuel: ${value.fuel_1}</p>
                <p>2 fuel: ${value.fuel_2}</p>
                <p>Isp: ${value.isp}</p>
                <p>Thrust: ${value.thrust.kN} Kn, ${value.thrust.lbf} Lbf</p>
            </div>
        </article>`;
    }
    return plantilla
}