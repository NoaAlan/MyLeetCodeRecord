/**
 * @Description: https://leetcode-cn.com/problems/3sum/
 * @author Li Guochao
 * @date 2019/3/19
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums = nums.sort()
	let length = nums.length
	let res = []
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			for (let k = j + 1; k < length; k++) {
				if (nums[k] + nums[j] === -nums[i]) {
					res.push([nums[i], nums[j], nums[k]])
				}
			}
		}
	}
	let hash = {}
	let result = []
	for(let i = 0, len = res.length; i < len; i++){
		if(!hash[res[i]]){
			result.push(res[i])
			hash[res[i]] = true
		}
	}
	return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
