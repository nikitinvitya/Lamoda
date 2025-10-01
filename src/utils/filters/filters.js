export const filterByPrice = (products, minFilterPrice, maxFilterPrice) => {
    return products.filter((product) => +product.price >= minFilterPrice && +product.price <= maxFilterPrice)
}

export const searchFilter = (products, searchParam) => {
    return !searchParam.trim()
        ?
        products
        :
        products.filter((product) => product.name.includes(searchParam) || product.description.includes(searchParam))
}

export const filterByColor = (products, selectedColor) => {
    if (!selectedColor.length) return products
    return products.filter((product) => selectedColor.includes(product.color))
}