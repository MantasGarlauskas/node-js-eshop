//funkcija kuri apskaiciuoja uz kiek dar galima suprekiauti is likusiu prekiu

function futureProfit(profit) {
    let futureProfit = 0;

    for (const item of profit) {
        futureProfit += item.inStock * item.price.value;
    }
    return futureProfit;
}

module.exports = futureProfit;