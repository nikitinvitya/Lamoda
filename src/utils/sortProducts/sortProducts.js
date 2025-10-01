const sortProducts = (products, method, param) => {
    const temp = method === 'asc' ? 1 : -1
    return [...products].sort((a, b) => temp * (a[param] - b[param]))
}

export default sortProducts;