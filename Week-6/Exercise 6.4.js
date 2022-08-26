function max_profit(prices) {
    // min_i will be storing minimum element we encountered till i
    // profit at i will be current price - minimum element we found till i
    let profit = 0, min_i = prices[0];
    for(let i=0; i<prices.length; i++){
        if(min_i > prices[i])
        min_i = prices[i];
        profit = Math.max(profit, prices[i] - min_i);
    }
    return profit;
}

let prices = [7,1,5,3,6,4];
console.log(max_profit(prices));
