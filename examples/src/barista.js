function getCupType (centiliters) {
    if (centiliters <= 1) {
        return 'tiny-cup';
    }

    if (centiliters <= 10) {
        return 'medium-cup'
    }

    if (centiliters <= 100) {
        return 'large-cup';
    }

    throw new Error('Too much content');
}

export default function makeBeverage ({ type, centiliters }) {
    return {
        type,
        cup: getCupType(centiliters),
    }
}