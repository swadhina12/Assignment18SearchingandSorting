//Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

function find132pattern(nums) {
    let s3 = [];
    let stack = [];
  
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < s3[s3.length - 1]) {
        return true;
      }
  
      while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
        s3.push(stack.pop());
      }
  
      stack.push(nums[i]);
    }
  
    return false;
  }
  
  // Example usage:
  const nums1 = [1, 2, 3, 4];
  console.log(find132pattern(nums1)); // Output: false
  
  const nums2 = [3, 1, 4, 2];
  console.log(find132pattern(nums2)); // Output: true
  
  const nums3 = [-1, 3, 2, 0];
  console.log(find132pattern(nums3)); // Output: true
  