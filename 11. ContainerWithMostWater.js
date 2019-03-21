const describe = 'https://leetcode-cn.com/problems/container-with-most-water/'

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let max = 0
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
		}
	}
	return max
}

console.log(maxArea([1, 1]))
