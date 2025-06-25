function containsNearbyDuplicate(nums, k) {
	let sett = new Set();

	// Given an integer array nums and an integer k,
	// return true if there are two distinct indices i and j
	// in the array such that nums[i] == nums[j] and abs(i - j) <= k.

	// Means, in the index range `i` to `i+k`, if there are k unique elements, return false.

	for (let i = 0; i < nums.length; i++) {
		if (sett.size > k) {
			sett.delete(nums[i - k - 1]);
		}

		if (sett.has(nums[i])) {
			return true;
		}

		sett.add(nums[i]);
	}
	return false;
}
