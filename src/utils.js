function componentToHex(c) {
    var hex = c.toSring(16);
    return hex.length === 1 ? '0' + hex : hex;
}

function rgbtoHex (r, g, b){
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbtoHex;