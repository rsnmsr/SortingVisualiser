var delay = 1;

async function insertionsort(elementArr) {
    var n = elementArr.length;

    for (var i = 1; i < n; i++) {

        var key = parseInt(elementArr[i].style.height);
        var j = i - 1;

        // Change the background color
        elementArr[j].style.background = "#0072ff";
        elementArr[j + 1].style.background = "#0072ff";

        // Wait for changes

        await new Promise(resolve => setTimeout(() => { resolve(), delay }));

        while (j >= 0 && parseInt(elementArr[j].style.height) > key) {

            await swap(elementArr[j + 1], elementArr[j]);

            elementArr[j].style.background = "#0072ff";
            elementArr[j + 1].style.background = "#218ac783";
            await new Promise(resolve => setTimeout(resolve, delay));
            j = j - 1;

            if (j >= 0) {
                elementArr[j].style.background = "#0072ff";
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        elementArr[j+1].style.height=key;

    }
    for (let i = 0; i < n; i++) {
        elementArr[i].style.background = "#15fa00";
    }
    await new Promise(resolve => setTimeout(resolve, delay));
}