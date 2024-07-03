export const getAllData = async (page, endpoint) => {
    let url = `https://api.spacexdata.com/v4/${endpoint}`;
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (endpoint === 'company') {
        url = `https://api.spacexdata.com/v4/company`;
        config.method = "GET";
    } else {
        url += "/query";
        config.method = "POST";
        config.body = JSON.stringify({
            options: {
                limit: 1,
                page: page
            }
        });
    }
    let res = await fetch(url, config)
    let data = await res.json()
    return data;
}