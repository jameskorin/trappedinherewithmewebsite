const layers = 1;

export function Encode(score) {
    let code = score;
    for(let i = 0; i < layers; ++i)
        code = btoa(code);
    return code;
}

export function Decode(code) {
    console.log(code);
    let score = fixURI(code);
    console.log(score);
    for(let i = 0; i < layers; ++i)
        score = atob(score);
    return score;
}

function fixURI(string) {
    return decodeURIComponent(string.replace(/%3D/g, "="));
}
