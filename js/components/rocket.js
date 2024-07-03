export const titleRocket = (res)=>{
    let [data] = res.docs
    console.log(data)
    return /*html*/ `
        <div class="header__title">${data.name}</div>`
} 