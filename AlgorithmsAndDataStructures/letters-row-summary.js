// "AAABBBCCC" -> "A3B3C3"
// "AAB" -> "A2B"
// "BBBBBBA" -> "B6A"
// "" -> ""
// "C" -> "C"
// "SBBBC" -> "SB3C"

console.log(lettersRowSummary("SBBBC"))

function lettersRowSummary(str) {
  const lettersRow = str.split('')
  const lettersCounted = []

  for (const letter of lettersRow) {
    const lastLetter = lettersCounted.at(-1)
    if (lastLetter && lastLetter.value === letter) {
      lastLetter.count += 1
    } else {
      lettersCounted.push({ value: letter, count: 1 })
    }
  }

  return lettersCounted.reduce((summary, { value, count }) => {
    return summary += `${value}${count > 1 ? count : ''}`
  }, '')
}
