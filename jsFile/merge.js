
async function mergeArr(elementArr, left, mid, right) {

    for (let i = left; i <= right; i++) {
        elementArr[i].style.background = "#0072ff";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    var idx_arr1 = mid - left + 1;
    var idx_arr2 = right - mid;

    let arr1 = [];
    let arr2 = [];

    // Populate the array
    // arr1 is left subarray and arr2 is right subarray

    for (var i = 0; i < idx_arr1; i++) {
        arr1[i] = elementArr[left + i].style.height;
    }

    for (var j = 0; j < idx_arr2; j++) {
        arr2[j] = elementArr[mid + 1 + j].style.height;
    }


    // Merge temporary array into main array

    var li = 0; var ri = 0; var main_i = left;

    while (li < idx_arr1 && ri < idx_arr2) {
        if (parseInt(arr1[li])  <=parseInt(arr2[ri])) {
            elementArr[main_i].style.height = arr1[li];
            li++
        } else {
            elementArr[main_i].style.height = arr2[ri];
            ri++;
        }

        main_i++;

    }


    // Copy the remaining element of arr1 and arr2 in the main array

    while(li<idx_arr1){
        elementArr[main_i].style.height = arr1[li];
        li++;main_i++;
    }
    while(ri<idx_arr2){

        elementArr[main_i].style.height = arr2[ri];
        ri++;main_i++;

    }




    await new Promise(resolve => setTimeout(resolve, delay));
}

async function MergeSort(elementArr, begin, end) {

    // Recursion stopping condition   
    if (begin >= end) return;

    for(var i=begin;i<end;i++){
        elementArr[i].style.background="#ff0077";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    var mid = begin + Math.floor((end - begin) / 2);

    // Call merge on left and right subpart 
    await MergeSort(elementArr, begin, mid);
    await new Promise(resolve => setTimeout(resolve, delay));

    await MergeSort(elementArr, mid + 1, end);
    await new Promise(resolve => setTimeout(resolve, delay));

    await mergeArr(elementArr, begin, mid, end);

    if ((end - begin) == elementArr.length-1) {
        for (let i = begin; i <= end; i++) {
            elementArr[i].style.background = "#15fa00";
        
        }
    }
    await new Promise(resolve => setTimeout(resolve, delay));
}

