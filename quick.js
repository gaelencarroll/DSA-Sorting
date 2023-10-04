/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(array,start=0,end=array.length-1){
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    }
    let pivot = array[start]
    let index = start

    for(let i = start + 1; i <= end; i++){
        if(pivot > array[i]){
            index++
            swap(array, index, i)
        }
    }
    swap(array, start, index)
    return index
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(array, left = 0, right = array.length-1) {
    if(left < right){
        let idx = pivot(array, left, right)
        quickSort(array, left, idx-1)
        quickSort(array, idx+1, right)
    }
    return array
}

module.exports = {quickSort, pivot};