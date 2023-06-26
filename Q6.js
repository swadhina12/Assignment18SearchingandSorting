//There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

function findMinArrowShots(points) {
    points.sort((a, b) => a[1] - b[1]);
  
    let count = 0;
    let end = points[0][1];
  
    for (let i = 1; i < points.length; i++) {
      if (points[i][0] > end) {
        count++;
        end = points[i][1];
      }
    }
  
    return count + 1;
  }
  
  // Example usage:
  const points1 = [[10, 16], [2, 8], [1, 6], [7, 12]];
  console.log(findMinArrowShots(points1)); // Output: 2
  
  const points2 = [[1, 2], [3, 4], [5, 6], [7, 8]];
  console.log(findMinArrowShots(points2)); // Output: 4
  
  const points3 = [[1, 2], [2, 3], [3, 4], [4, 5]];
  console.log(findMinArrowShots(points3)); // Output: 2
  