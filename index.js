// Khai báo mảng
let arrNumber = []

// Lấy danh sách button xử lý kết quả
let button = document.querySelectorAll('.tab-group-body button')

// Button thêm giá trị mới vào mảng
document.querySelector('#creArr').onclick = function () {
  let newValue = Number(document.querySelector('#inputNum').value)
  if (newValue === 0) {
    alert('Vui lòng nhập số vào')
    return
  } else {
    arrNumber.push(newValue)
    let joinArr = arrNumber.join(' | ')
    document.querySelector('#arrNum').innerHTML = joinArr
    document.querySelector('#inputNum').value = ''
  }
}

// Button reset giá trị mảng
document.querySelector('#resetArr').onclick = function () {
  arrNumber.splice(0, arrNumber.length)
  document.querySelector('#arrNum').innerHTML = arrNumber
}

// Bài 1: Tính tổng các số dương trong mảng
button[0].onclick = function () {
  // input: array number
  // process: dùng hàm sumPosNum để tính tổng giá trị các số dương có trong mảng
  let positiveSum = sumPosNum(arrNumber)
  document.querySelector('#result-1').innerHTML = positiveSum
}

// Bài 2: Đếm có bao nhiêu số dương trong mảng
button[1].onclick = function () {
  // input: array number
  // process: dùng hàm countPosNum để tính toán số lượng số dương trong mảng
  let positiveCount = countPosNum(arrNumber)

  // output: in số lượng số dương có trong mảng ra màn hình
  document.querySelector('#result-2').innerHTML = positiveCount
}

// Bài 3: Tìm số nhỏ nhất trong mảng
button[2].onclick = function () {
  // input: array number
  // process: dùng hàm findSmalNum để tìm số nhỏ nhất trong mảng
  let smallNum = findSmallNum(arrNumber)
  if (smallNum === undefined) {
    smallNum = 'Bạn chưa thêm số vào mảng'
  }
  // output: in số nhỏ nhất trong mảng ra màn hình
  document.querySelector('#result-3').innerHTML = smallNum
}

// Bài 4: Tìm số dương nhỏ nhất trong mảng
button[3].onclick = function () {
  // input: array number
  // process: dùng hàm findSmallPosNum để tìm số dương nhỏ nhất trong mảng
  let positiveSmall = findSmallPosNum(arrNumber)
  if (positiveSmall === 0) {
    positiveSmall = 'Bạn chưa thêm số vào mảng'
  }
  // output: in số dương nhỏ nhất trong mảng ra màn hình
  document.querySelector('#result-4').innerHTML = positiveSmall
}

// Bài 5: Tìm số chẵn cuối cùng trong mảng, nếu mảng không có giá trị chẵn thì trả về -1
button[4].onclick = function () {
  // input: array number
  // process: dùng hàm findEvenNumEnd để tìm số chẵn cuối cùng trong mảng
  let evenNumEnd = findEvenNumEnd(arrNumber)

  // output: in số chẵn cuối cùng trong mảng ra màn hình
  document.querySelector('#result-5').innerHTML = evenNumEnd
}

// Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí người dùng nhập vào
button[5].onclick = function () {
  // input: array number
  // process: dùng hàm swapIndexElement để thay đổi vị trí phần tử trong mảng theo giá trị người dùng nhập vào
  arrNumber = swapIndexElement(arrNumber, '#item-6 input')

  // output: in mảng đã chuyển đổi vị trí ra màn hình
  let joinArr = arrNumber.join(' | ')
  document.querySelector('#result-6').innerHTML = joinArr
}

// Bài 7: Sắp xếp mảng theo thứ tự tăng dần
button[6].onclick = function () {
  // input: array number
  // process: sử dụng hàm sortAscending để sắp xếp các phần tử trong mảng theo thứ tự tăng dần
  let sortArrNumber = sortAscending(arrNumber)

  // output: in mảng đã sắp xếp lại ra màn hình
  document.querySelector('#result-7').innerHTML = sortArrNumber.join(' | ')
}

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng, nếu không có số nguyên tố trả về -1
button[7].onclick = function () {
  // input: array number
  // process: sử dụng hàm findPrimeNum để sắp xếp các phần tử trong mảng theo thứ tự tăng dần
  let primeNumFirst = findPrimeNum(arrNumber)

  // output: in số nguyên tố đầu tiên tìm thấy ra màn hình
  document.querySelector('#result-8').innerHTML = primeNumFirst
}

// Bài 9: Đếm có bao nhiêu số nguyên trong mảng
button[8].onclick = function () {
  // input: array number
  // process: sử dụng hàm countIntegerNum để tính số lượng số nguyên có trong mảng
  let intergerCount = countIntegerNum(arrNumber)

  // output: in số lượng số nguyên trong mảng ra màn hình
  document.querySelector('#result-9').innerHTML = intergerCount
}

// Bài 10: So sánh số lượng số dương và số âm trong mảng
button[9].onclick = function () {
  // input: array number
  // process: sử dụng hàm comparePosNeg để so sánh số lượng số dương và số âm trong mảng
  let outputComparePosNeg = comparePosNeg(arrNumber)

  // output: in kết quả so sánh số lượng số dương và số âm trong mảng ra màn hình
  document.querySelector('#result-10').innerHTML = outputComparePosNeg
}
