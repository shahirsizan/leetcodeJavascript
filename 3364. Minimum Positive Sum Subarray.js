var minimumSumSubarray = function (nums, l, r) {
	let globalMinSum = Infinity;
	let globalMinSumChangedFlag = false;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + l; j <= i + r && j <= nums.length; j++) {
			const subSum = nums.slice(i, j).reduce((currentSum, currentVal) => {
				return currentSum + currentVal;
			}, 0);
			if (subSum > 0) {
				globalMinSum = Math.min(globalMinSum, subSum);
				globalMinSumChangedFlag = true;
			}
		}
	}

	if (globalMinSumChangedFlag) {
		return globalMinSum;
	} else {
		return -1;
	}
};
