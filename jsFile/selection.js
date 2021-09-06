delay = 1;
async function selectionSort(elementArr) {

    var n = elementArr.length;
    var min_id = 0

    for (var i = 0; i < n; i++) {

        // Chnage background color of the i'th element
        elementArr[i].style.background = "#0072ff";

        // Find the minimum index and swap with the i'th index

        min_id = i;
        elementArr[min_id].style.background = "#0072ff";
        await new Promise(resolve => setTimeout(() => { resolve(), delay }));

        for (var j = i + 1; j < n; j++) {

            elementArr[j].style.background = "#0072ff";
            await new Promise(resolve => setTimeout(resolve, delay));

            if (parseInt(elementArr[j].style.height) < parseInt(elementArr[min_id].style.height)) {

                // Chaning previous bar to earlier color
                elementArr[min_id].style.background = "#218ac783";
                min_id = j;
                elementArr[min_id].style.background = "#0072ff";
                await new Promise(resolve => setTimeout(resolve, delay));
            }

            // Change background color of the element at min index


        }

        // We will get the value from above step so swap the min and i'th element

        await swap(elementArr[i], elementArr[min_id]);

        elementArr[i].style.background = "#15fa00";
        await new Promise(resolve => setTimeout(resolve, delay));


    }

    // Final

    await new Promise(resolve => setTimeout(resolve, delay));
}