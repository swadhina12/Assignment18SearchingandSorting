//Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        // Swap current element with the element at low pointer
        [nums[low], nums[mid]] = [nums[mid], nums[low]];
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        // Move mid pointer to the next element
        mid++;
      } else if (nums[mid] === 2) {
        // Swap current element with the element at high pointer
        [nums[mid], nums[high]] = [nums[high], nums[mid]];
        high--;
      }
    }
  }
  
  // Example usage:
  const nums1 = [2, 0, 2, 1, 1, 0];
  sortColors(nums1);
  console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]
  
  const nums2 = [2, 0, 1];
  sortColors(nums2);
  console.log(nums2); // Output: [0, 1, 2]
  