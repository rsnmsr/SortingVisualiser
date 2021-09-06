var delay=1;

async function bubblesort(elementArr){
   
   var n=elementArr.length;
   
   // Bubble sort starts here

   for(var i=0;i<n-1;i++){
       for(var j=0;j<n-i-1;j++){

        // Change the background color
        elementArr[j].style.background="#0072ff";
        elementArr[j+1].style.background='"#0072ff"';

        // Wait for changes

        await new Promise(resolve => setTimeout(() => {resolve(), delay}));

        if(parseInt(elementArr[j].style.height)>parseInt(elementArr[j+1].style.height)){
            await swap(elementArr[j], elementArr[j+1]);
        }

        elementArr[j].style.background = "#218ac783";
        elementArr[j+1].style.background = "#218ac783";
        await new Promise(resolve => setTimeout(resolve, delay));

       }

       elementArr[n-i-1].style.background = "#15fa00";
       await new Promise(resolve => setTimeout(resolve, delay));


   }



}