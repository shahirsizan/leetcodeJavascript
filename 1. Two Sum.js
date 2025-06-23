var twoSum = function (nums, target) {
	const numbersMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		const remainder = target - nums[i];

		if (numbersMap.has(remainder)) {
			return [numbersMap.get(remainder), i]; // found the pair
		}

		numbersMap.set(nums[i], i); // Store `nums[i]:index`
	}
};

function testTwoSum(nums, target) {
	const result = twoSum(nums, target);
	console.log(`Input: nums = [${nums}], target = ${target}`);
	console.log(`Output: [${result[0]}, ${result[1]}]`);
	console.log("---------------------------");
}

// Test cases
testTwoSum([2, 7, 11, 15], 9); // Output: [0, 1]
testTwoSum([3, 2, 4], 6); // Output: [1, 2]
testTwoSum([3, 3], 6); // Output: [0, 1]
testTwoSum([1, 5, 3, 7], 10); // Output: [1, 3]
