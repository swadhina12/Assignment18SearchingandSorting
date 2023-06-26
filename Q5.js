//Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

function containsDuplicate(nums) {
    const set = new Set();
  
    for (const num of nums) {
      if (set.has(num)) {
        return true;
      }
      set.add(num);
    }
  
    return false;
  }
  
  // Example usage:
  const nums1 = [1, 2, 3, 1];
  console.log(containsDuplicate(nums1)); // Output: true
  
  const nums2 = [1, 2, 3, 4];
  console.log(containsDuplicate(nums2)); // Output: false
  
  const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  console.log(containsDuplicate(nums3)); // Output: true
  