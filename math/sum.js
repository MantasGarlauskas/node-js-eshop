class SumTotal {
    static totalProfit(profit) {
        let totalProfit = 0;

        for (const item of profit) {
            totalProfit += item.sold * item.price.value;
        }
        return totalProfit;
    }

}
module.exports = SumTotal;