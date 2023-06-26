//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
function mergeIntervals(intervals) {
  // Sort intervals based on the starting point
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize the result array with the first interval
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = result[result.length - 1];

    // Check for overlap
    if (currentInterval[0] <= previousInterval[1]) {
      // Merge the intervals by updating the end point
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      // Add the non-overlapping interval to the result array
      result.push(currentInterval);
    }
  }

  return result;
}

// Example usage:
const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals1)); // Output: [[1, 6], [8, 10], [15, 18]]

const intervals2 = [[1, 4], [4, 5]];
console.log(mergeIntervals(intervals2)); // Output: [[1, 5]]
