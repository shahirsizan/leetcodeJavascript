var findMaxAverage = function (nums, k) {
	var left = 0;
	var right = 1;
	var sum = nums[left];
	var average = 0;
	var globalMaxAverage = -Infinity;

	while (right < k) {
		sum = sum + nums[right];
		right++;
	}
	average = sum / k;
	globalMaxAverage = Math.max(average, globalMaxAverage);
	// console.log("sum: ", sum);
	// console.log("avg: ", average);

	if (right == nums.length) {
		return globalMaxAverage;
	}

	while (right < nums.length) {
		sum -= nums[left];
		sum += nums[right];
		average = sum / k;
		right++;
		left++;
		globalMaxAverage = Math.max(average, globalMaxAverage);
	}
	// console.log(globalMaxAverage);
	return globalMaxAverage;
};

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
