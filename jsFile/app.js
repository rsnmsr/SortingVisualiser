var addArrButton=document.querySelector('.new-array');
var rootElement = document.querySelector('.addElement')
var inputBar=document.querySelector('.arr_sz');


function newArrInitiate(barNo) {
  
    rootElement.innerHTML='';
    arr = [];
    var num=barNo;

    for (let i = 0; i < barNo; i++) {
        arr[i] = Math.floor(100 * Math.random());
//        var rootElement = document.querySelector('.addElement')
        var dic = document.createElement('div');
        dic.classList.add('style1');
        dic.style.height=arr[i]+'vh';
        rootElement.appendChild(dic);
    }


}

// Number of bars to be taken here


addArrButton.addEventListener('click',()=>{
    var barNo=inputBar.value;
    newArrInitiate(barNo);
});

inputBar.addEventListener('input',()=>{
    var barNo=inputBar.value;
    newArrInitiate(barNo);
});

// Initiate bubble sort drom here

var bubbleBtn=document.querySelector('.bubble-sort');
bubbleBtn.addEventListener('click',()=>{
    let heightElement=document.querySelectorAll('.style1');
    bubblesort(heightElement);
})

// Initiate intertion sort 

var InsertionBtn=document.querySelector('.insertion-sort');
InsertionBtn.addEventListener('click',()=>{
    let heightElement=document.querySelectorAll('.style1');
    insertionsort(heightElement);
})

// Initiate selection sort

var SelectionBtn=document.querySelector('.selection-sort');
SelectionBtn.addEventListener('click',()=>{
    let heightElement=document.querySelectorAll('.style1');
    selectionSort(heightElement);
})

// Initiate Merge sort

var MergeBtn=document.querySelector('.merge-sort');
MergeBtn.addEventListener('click',()=>{
    let heightElement=document.querySelectorAll('.style1');
    
    // Take left as 0 and right as n-1 and call the function
    var right=heightElement.length-1;
    var left=0;

    MergeSort(heightElement,left,right);
})

// Begin quick sort

var QuickBtn=document.querySelector('.quick-sort');
QuickBtn.addEventListener('click',()=>{
    let heightElement=document.querySelectorAll('.style1');
    
    // Take left as 0 and right as n-1 and call the function
    var right=heightElement.length-1;
    var left=0;

    QuickSort(heightElement,left,right);
})

