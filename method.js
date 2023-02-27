// Bài 1
/**
 * It takes an array of numbers as an argument, and returns the sum of all the positive numbers in the
 * array.
 * @param arrNumber - [1, -2, 3, 4, -9, 6]
 * @returns The sum of all positive numbers in the array.
 */
function sumPosNum(arrNumber) {
  let positiveSum = 0
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      positiveSum += arrNumber[i]
    }
  }
  return positiveSum
}

// Bài 2
/**
 * It loops through the array and counts the number of positive numbers.
 * @param arrNumber - [2, 5, -7, 1, 3]
 * @returns The number of positive numbers in the array.
 */
function countPosNum(arrNumber) {
  let positiveCount = 0
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      positiveCount += 1
    }
  }
  return positiveCount
}

// Bài 3
/**
 * It takes an array of numbers and returns the smallest number in the array.
 * @param arrNumber - an array of numbers
 * @returns The smallest number in the array.
 */
function findSmallNum(arrNumber) {
  let smallNum = arrNumber[0]
  for (let i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < smallNum) {
      smallNum = arrNumber[i]
    }
  }
  return smallNum
}

// Bài 4
/**
 * It loops through the array, and if the current element is positive and either the positiveSmall
 * variable is 0 or the current element is smaller than the positiveSmall variable, it sets the
 * positiveSmall variable to the current element.
 * @param arrNumber - an array of numbers
 * @returns The smallest positive number in the array.
 */
function findSmallPosNum(arrNumber) {
  let positiveSmall = 0 //1
  for (let i = 0; i < arrNumber.length; i++) {
    if (
      arrNumber[i] > 0 && //2
      (positiveSmall === 0 || arrNumber[i] < positiveSmall)
    ) {
      positiveSmall = arrNumber[i]
    }
  }
  return positiveSmall
}

// Bài 5
/**
 * It loops through the array, and if it finds a positive even number, it sets that number to the
 * variable evenNumEnd.
 * @param arrNumber - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @returns The last even number in the array.
 */
function findEvenNumEnd(arrNumber) {
  let evenNumEnd = -1
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0 && arrNumber[i] % 2 === 0) {
      evenNumEnd = arrNumber[i]
    }
  }
  return evenNumEnd
}

// Bài 6
/**
 * It takes an array and two indexes, and swaps the elements at those indexes.
 * @param arrNumber - the array of numbers
 * @param selector - the selector of the input fields
 * @returns The array with the swapped elements.
 */
function swapIndexElement(arrNumber, selector) {
  let inputIndex = document.querySelectorAll(selector)
  let indexStart = inputIndex[0].value
  let indexSwap = inputIndex[1].value
  let elementStart = arrNumber[indexStart]
  let elementSwap = arrNumber[indexSwap]
  arrNumber[indexStart] = elementSwap
  arrNumber[indexSwap] = elementStart
  return arrNumber
}

// Bài 7
/**
 * It takes an array of numbers and returns a new array of numbers sorted in ascending order.
 * @param arrNumber - [2, 8, 4, 6, 8, 5, 8, 4]
 * @returns the sorted array.
 */
function sortAscending(arrNumber) {
  for (let i = 0; i < arrNumber.length - 1; i++) {
    for (let j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] > arrNumber[j]) {
        let markValue = arrNumber[i]
        arrNumber[i] = arrNumber[j]
        arrNumber[j] = markValue
      }
    }
  }
  return arrNumber
}

// Bài 8
/**
 * It finds the first prime number in an array of numbers.
 * @param arrNumber - [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
 * 24, 25, 26, 27, 28, 29, 30, 31
 * @returns The first prime number in the array.
 */
function findPrimeNum(arrNumber) {
  let primeNumFirst = -1
  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === 2) {
      primeNumFirst = arrNumber[i]
      break
    } else if (arrNumber[i] % 2 === 0) continue
    else {
      primeNumFirst = arrNumber[i]
      break
    }
  }
  return primeNumFirst
}

// Bài 8
/**
 * It takes an array of numbers and returns the number of integers in the array.
 * @param arrNumber - an array of numbers
 * @returns The number of integers in the array.
 */
function countIntegerNum(arrNumber) {
  let intergerCount = 0
  for (i = 0; i < arrNumber.length; i++) {
    if (Number.isInteger(arrNumber[i])){
      intergerCount += 1
    }
  }
  return intergerCount
}

// Bài 9
/**
 * It takes an array of numbers as an argument, and returns a string that says whether the number of
 * positive numbers in the array is greater than, less than, or equal to the number of negative numbers
 * in the array.
 * @param arrNumber - an array of numbers
 * @returns A string.
 */
function comparePosNeg(arrNumber) {
  let arrPosNum = []
  let arrNegNum = []
  let output = ''
  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      arrPosNum.push(arrNumber[i])
    } else {
      arrNegNum.push(arrNumber[i])
    }
  }
  if (arrPosNum.length === arrNegNum.length) {
    output = `Số Dương = Số Âm`
  } else if (arrPosNum.length > arrNegNum.length) {
    output = `Số Dương > Số Âm`
  } else {
    output = `Số Âm > Số Dương`
  }
  return output
}
