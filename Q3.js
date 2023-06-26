//You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

function firstBadVersion(n) {
    let left = 1;
    let right = n;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Example usage:
  const n1 = 5;
  const bad1 = 4;
  console.log(firstBadVersion(n1)); // Output: 4
  
  const n2 = 1;
  const bad2 = 1;
  console.log(firstBadVersion(n2)); // Output: 1
  