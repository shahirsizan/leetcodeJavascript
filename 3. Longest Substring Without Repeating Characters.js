var lengthOfLongestSubstring = (given_string) => {
	let left = 0;
	let longestLength = 0;
	let sett = new Set();

	for (let right = 0; right < given_string.length; right++) {
		while (sett.has(given_string[right])) {
			sett.delete(given_string[left]);
			left++;
		}

		sett.add(given_string[right]);
		longestLength = Math.max(longestLength, right - left + 1);
	}

	return longestLength;
};
