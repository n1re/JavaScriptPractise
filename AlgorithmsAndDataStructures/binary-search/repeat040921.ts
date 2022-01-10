function search(
  nums: number[],
  target: number
): number {
  let left: number = 0
  let right: number = nums.length - 1
  let pivot: number = 0

  while(right - left > 1) {
    pivot = left + Math.floor((right - left) / 2)

    if (nums[pivot] < target) {
      left = pivot
    } else {
      right = pivot
    }
  }

  if (nums[left] === target) {
    return left
  }

  if (nums[right] === target) {
    return right
  }

  return -1
}

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], -1))
console.log(search([-1,0,3,5,9,12], 3))
