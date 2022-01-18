// funkcija kuri skaiciuoja visu likutiniu (neparduotu) prekiu keiki sandelyje

function instockTotalCOunt(itemLeft) {
    let totalGoods = 0;

    for (const amount of itemLeft) {
        totalGoods += amount.inStock;
    }
    return totalGoods;
}

module.exports = instockTotalCOunt;