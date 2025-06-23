var isAnagram = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}

	const charCountMap = new Map();

	// count characters in `s`
	for (let char of s) {
		charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
	}

	// subtract counts from `s` using `t`
	for (let char of t) {
		if (!charCountMap.has(char)) {
			return false;
		}

		let existingCount = charCountMap.get(char);
		if (existingCount === 1) {
			charCountMap.delete(char);
		} else {
			charCountMap.set(char, existingCount - 1);
		}
	}

	return charCountMap.size === 0;
};

console.log("anagram, nagaram: ", isAnagram("anagram", "nagaram")); // true
console.log("rat, car: ", isAnagram("rat", "car")); // false
console.log("aacc, ccac: ", isAnagram("aacc", "ccac")); // false
console.log("listen, silent: ", isAnagram("listen", "silent")); // true
