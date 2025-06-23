var twoSum = function (numbers, target) {
	const numbersMap = new Map();

	for (let i = 0; i < numbers.length; i++) {
		const remainder = target - numbers[i];

		if (numbersMap.has(remainder)) {
			return [numbersMap.get(remainder) + 1, i + 1]; // found the pair
		}

		numbersMap.set(numbers[i], i); // Store `nums[i]:index`
	}
};
