function getCupType (centiliters) {
    if (centiliters <= 1) {
        return 'tiny-cup';
    }

    if (centiliters <= 50) {
        return 'medium-cup'
    }

    return 'large-cup';
}

export default function makeBeverage ({ type, centiliters }) {
    return {
        type,
        cup: getCupType(centiliters),
    }
}