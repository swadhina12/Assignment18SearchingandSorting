//Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

function maximumGap(nums) {
    const n = nums.length;
  
    if (n < 2) {
      return 0;
    }
  
    const maxNum = Math.max(...nums);
  
    let exp = 1;
    let output = new Array(n);
    const count = new Array(10).fill(0);
  
    while (maxNum / exp > 0) {
      count.fill(0);
  
      for (let i = 0; i < n; i++) {
        const digit = Math.floor(nums[i] / exp) % 10;
        count[digit]++;
      }
  
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }
  
      for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(nums[i] / exp) % 10;
        output[count[digit] - 1] = nums[i];
        count[digit]--;
      }
  
      nums = output.slice();
      exp *= 10;
    }
  
    let maxDiff = 0;
    for (let i = 1; i < n; i++) {
      maxDiff = Math.max(maxDiff, nums[i] - nums[i - 1]);
    }
  
    return maxDiff;
  }
  
  // Example usage:
  const nums1 = [3, 6, 9, 1];
  console.log(maximumGap(nums1)); // Output: 3
  
  const nums2 = [10];
  console.log(maximumGap(nums2)); // Output: 0
  