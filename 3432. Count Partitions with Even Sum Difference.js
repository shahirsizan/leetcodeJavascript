var countPartitions = function (nums) {
	const n = nums.length;
	const preForward = new Array(n);
	const preReverse = new Array(n);
	let count = 0;

	//Build prefix sum in forward direction
	preForward[0] = nums[0];
	for (let i = 1; i < n; i++) {
		preForward[i] = preForward[i - 1] + nums[i];
	}

	//Build prefix sum in reverse direction
	preReverse[n - 1] = nums[n - 1];
	for (let i = n - 2; i >= 0; i--) {
		preReverse[i] = preReverse[i + 1] + nums[i];
	}

	// Check for even differences
	for (let i = 0; i < n - 1; i++) {
		let diff = preForward[i] - preReverse[i + 1];

		if (diff % 2 === 0) {
			count++;
		}
	}

	return count;
};
