async function partitionFn(elementArr,l1,h1){

    var pivIdx=Math.floor((l1+h1)/2);

    var pivot=parseInt(elementArr[pivIdx].style.height);

    var i = l1;
    var j=h1;

    while(i<=j){

        while(parseInt(elementArr[i].style.height)<pivot){
            i++;
        }

        while(parseInt(elementArr[j].style.height)>pivot){
            j--;
        }

        if(i<=j){

            swap(elementArr[i],elementArr[j]);
            i++;j--;
            await new Promise(resolve => setTimeout(resolve, delay));

        }


    }

    return i;


}

async function QuickSort(elementArr,begin,end){

    for(var i=begin;i<end;i++){
        elementArr[i].style.background="#ff0077";
    }


    if(begin<end){

        var partIdx;
        if(elementArr.length>1){

            partIdx=await partitionFn(elementArr,begin,end);

            if(begin<partIdx-1){

                await QuickSort(elementArr,begin,partIdx-1);
                await new Promise(resolve => setTimeout(resolve, delay));

            }

            if(partIdx<end){

                await QuickSort(elementArr,partIdx,end);
                await new Promise(resolve => setTimeout(resolve, delay));

            }

        }

       

    }

    if ((end - begin) == elementArr.length-1) {
        for (let i = begin; i <= end; i++) {
            elementArr[i].style.background = "#15fa00";
        
        }
    }

    await new Promise(resolve => setTimeout(resolve, delay));

}