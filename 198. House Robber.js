var rob = function (nums) {
	const nums_length = nums.length;

	// if no house, return 0
	if (nums_length === 0) {
		return 0;
	}

	// if only one house, just rob it
	if (nums_length === 1) {
		return nums[0];
	}

	const dp = new Array(nums_length).fill(0);
	// dp[i] will store the max-amount that can be robbed from house `0` till `i`
	dp[0] = nums[0];
	dp[1] = Math.max(dp[0], nums[1]);

	for (let i = 2; i < nums_length; i++) {
		// Either rob `house[i]` and add `dp[i-2]`
		// or skip and take `dp[i-1]` only
		dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
	}

	return dp[nums_length - 1]; // max-amount at the very end of the house array
};
