function digitCount(num){
    if(num === 0){
        return 1
    }
    let count = Math.floor(Math.log10(Math.abs(num))) + 1;
    return count;
}

function getDigit(num, i){
    let digit = Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
    return digit
}

function mostDigits(nums){
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        max = Math.max(max, digitCount(nums[i]))
    }
    return max
}

function radixSort(array) {
    let maxDigits = mostDigits(array)
    for(let i = 0; i < maxDigits; i++){
        let digits = Array.from({length : 10}, ()=>[])
        for(let j = 0; j < array.length; j++){
            let n = array[j]
            let digit = getDigit(n, i)
            digits[digit].push(n)
        }
        array = [].concat(...digits)
    }
    return array
}

module.exports = radixSort;