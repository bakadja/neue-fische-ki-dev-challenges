function generateMask(length) {
    let mask = "" 
    for(let i = 0; i < length; i++) {
        mask += "#"
    }
    return mask
}

function maskify(characters = "") {
    const toString = String(characters)
    if(toString === "" || toString.length === 1) {
        return toString
    }
    const mask = generateMask(toString.slice(0, -4).length)
    return mask + toString.slice(-4)

}

console.log(maskify(4556364607935616))
console.log(maskify("64607935616"))
console.log(maskify("1"))
console.log(maskify())
