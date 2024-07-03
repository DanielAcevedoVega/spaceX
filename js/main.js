import { titleRocket } from "./components/rocket.js";
import { getDataRocket } from "./module/app.js"


let endpoint = 'rockets'
let page = 1

let data = await getDataRocket(page, endpoint)

let title = document.querySelector('.header');

title.innerHTML = titleRocket(data)

