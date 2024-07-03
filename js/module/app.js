export const getDataRocket = async (page, endpoint) =>{
    let url = `https://api.spacexdata.com/v4/${endpoint}/query`
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                limit: 1,
                page: page
            }
        })
    }
    let res = await fetch(url, config)
    let data = await res.json()
    return data;
}