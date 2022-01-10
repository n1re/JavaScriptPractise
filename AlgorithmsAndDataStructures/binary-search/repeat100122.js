const test = require('./ test')

const search = (target, arr, min = 0, max = arr.length - 1) => {
  const rangeLength = max - min
  const middleIndex = Math.ceil(max - (rangeLength / 2))
  const middle = arr[middleIndex]

  if (target < middle) {
    return search(target, arr, min, middleIndex - 1)
  } else if (target > middle) {
    return search(target, arr, middleIndex + 1, max)
  } else {
    return middleIndex
  }
}

test(search)
