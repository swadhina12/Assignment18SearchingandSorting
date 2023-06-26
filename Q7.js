//Given an integer array `nums`, return *the length of the longest **strictly increasing***

function lengthOfLIS(nums) {
    const n = nums.length;
    const dp = Array(n).fill(1);
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
  
    return Math.max(...dp);
  }
  
  // Example usage:
  const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
  console.log(lengthOfLIS(nums1)); // Output: 4
  
  const nums2 = [0, 1, 0, 3, 2, 3];
  console.log(lengthOfLIS(nums2)); // Output: 4
  
  const nums3 = [7, 7, 7, 7, 7, 7, 7];
  console.log(lengthOfLIS(nums3)); // Output: 1
  
