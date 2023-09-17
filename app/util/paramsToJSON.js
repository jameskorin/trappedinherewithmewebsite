export default function paramsToJSON(url) {
    const search = url.split('?')[1];
    let paramPairs = search.split('&');
    let obj = {};
    for(let i = 0; i < paramPairs.length; ++i) {
        const a = paramPairs[i].split('=');
        obj[a[0]] = a[1];
    }
    return obj;
}