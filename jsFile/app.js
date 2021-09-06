var addArrButton=document.querySelector('.new-array');
var rootElement = document.querySelector('.addElement')

function newArrInitiate() {

    rootElement.innerHTML='';
    arr = [];

    for (let i = 0; i < 100; i++) {
        arr[i] = Math.floor(100 * Math.random());
//        var rootElement = document.querySelector('.addElement')
        var dic = document.createElement('div');
        dic.classList.add('style1');
        dic.style.height=arr[i]+'vh';
        rootElement.appendChild(dic);
    }


}

addArrButton.addEventListener('click',newArrInitiate);

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