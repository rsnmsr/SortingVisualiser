var delay = 1;

async function swap(el1, el2) {

   el1.style.background='red';
    el2.style.background='red';

    await new Promise(resolve => setTimeout(resolve, delay));

    let heightBar1 = el1.style.height;
    let heightBar2 = el2.style.height;

    el1.style.height = heightBar2;
    el2.style.height = heightBar1;
    await new Promise(resolve => setTimeout(resolve, delay));
}