const describe = 'https://leetcode-cn.com/problems/two-sum/'

// 2019-03-15

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		let temp = nums[i]
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if ((temp + nums[j]) === target) {
// 				return [i, j]
// 			}
// 		}
// 	}
// }
//res = 执行用时 : 288 ms, 在Two Sum的JavaScript提交中击败了17.73% 的用户
//      内存消耗 : 34.6 MB, 在Two Sum的JavaScript提交中击败了0.99% 的用户

var twoSum = function (nums, target) {
	let map = {}
	let length = nums.length
	for (let i = 0; i < length; i++) {
		if (typeof map[target - nums[i]] !== 'undefined') {
			return [i, map[target - nums[i]]]
		}
		map[nums[i]] = i
	}
}
//res = 执行用时 : 96 ms, 在Two Sum的JavaScript提交中击败了81.53% 的用户
//      内存消耗 : 34.1 MB, 在Two Sum的JavaScript提交中击败了0.99% 的用户

let arr = [2, 7, 11, 15]

console.log(twoSum(arr, 9))
