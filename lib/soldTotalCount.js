// funkcija kuri skaiciuoja visu likutiniu (neparduotu) prekiu keiki sandelyje

function soldTotalCount(sold) {
    let soldTotal = 0;

    for (const amount of sold) {
        soldTotal += amount.sold;
    }
    return soldTotal;
}

module.exports = soldTotalCount;