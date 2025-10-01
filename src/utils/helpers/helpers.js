export const getProductsColors = (products) => {
    const res = []
    for (let i = 0; i < products.length; i++) {
        res.push(products[i].color)
    }
    return new Set(res)
}

export const changeSelectedColor = (color, selectedColor, setSelectedColor) => {
    if (selectedColor.includes(color)) {
        setSelectedColor(selectedColor.filter((el) => el !== color))
    } else {
        setSelectedColor([...selectedColor, color])
    }
}