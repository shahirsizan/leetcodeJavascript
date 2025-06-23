var maxSubArray = function (nums) {
	let globalMaxSum = -Infinity;
	let currentSum = 0;

	for (let num of nums) {
		currentSum += num;
		globalMaxSum = Math.max(globalMaxSum, currentSum);

		if (currentSum < 0) {
			currentSum = 0;
		}
	}

	return globalMaxSum;
};
