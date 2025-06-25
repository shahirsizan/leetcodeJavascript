var countGoodSubstrings = function (s) {
	let count = 0;

	for (let i = 0; i < s.length - 2; i++)
		if (s[i] != s[i + 1] && s[i + 1] != s[i + 2] && s[i] != s[i + 2]) {
			count++;
		}
	return count;
};

// var countGoodSubstrings = function (s) {
// 	var left = 0;
// 	var right = 0;
// 	let count = 0;
// 	let freqMap = {};

// 	// if given string length < 3; return 0
// 	if (s.length < 3) {
// 		return 0;
// 	}

// 	// Initializing freqMap for the first window(first three letter)
// 	for (right; right < 3; right++) {
// 		freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;
// 	}

// 	// Check if all characters in current window are unique
// 	if (
// 		Object.values(freqMap).every((value) => {
// 			return value === 1;
// 		})
// 	) {
// 		count++;
// 	}

// 	// Slide the window
// 	while (right < s.length) {
// 		const charToRemove = s[left];
// 		const charToAdd = s[right];

// 		// subtract count of outgoing character
// 		freqMap[charToRemove]--;
// 		if (freqMap[charToRemove] === 0) {
// 			delete freqMap[charToRemove];
// 		}

// 		// increase count of incoming character
// 		freqMap[charToAdd] = (freqMap[charToAdd] || 0) + 1;

// 		// Check if all characters in current window are unique
// 		if (
// 			Object.values(freqMap).every((value) => {
// 				return value === 1;
// 			})
// 		) {
// 			count++;
// 		}

// 		left++;
// 		right++;
// 	}

// 	return count;
// };
