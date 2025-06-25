var maxProfit = (pricesList) => {
	let currentPurchasePrice = pricesList[0];
	let global_profit = 0;

	for (let i = 1; i < pricesList.length; i++) {
		if (pricesList[i] < currentPurchasePrice) {
			// loss, gotta buy at `pricesList[i]`
			currentPurchasePrice = pricesList[i];
		} else {
			let current_profit = pricesList[i] - currentPurchasePrice;
			if (current_profit > global_profit) {
				global_profit = pricesList[i] - currentPurchasePrice;
			}
		}
	}
	return global_profit;
};
