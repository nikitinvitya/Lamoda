import Chance from "chance";
import {CATEGORIES, COLORS} from "../constants/constants.js";


const generateProduct = (count) => {
    const chance = new Chance()
    const result = []

    for (let i = 0; i < count; i++) {
        result.push(
            {
                name: chance.pickone(CATEGORIES),
                description: 'Product Description',
                id: chance.guid(),
                color: chance.pickone(COLORS),
                price: chance.integer({min: 10, max: 9999}),
                rating: chance.floating({min: 1, max: 5, fixed: 1}),
                imageUrl: '/images/product.svg',
            }
        )
    }

    return result
}

export default generateProduct;