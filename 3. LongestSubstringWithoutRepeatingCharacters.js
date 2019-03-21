const describe = 'https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/'

// 2019-03-15

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let sTemp = s.split('')
	let length = sTemp.length
	// let sNonRepeat = Array.from(new Set(s)).toString()
	// if (s.indexOf(sNonRepeat) > 0) return sNonRepeat.length
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {

		}
	}
}



