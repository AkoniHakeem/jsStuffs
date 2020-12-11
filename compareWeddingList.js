const compareListExactEquality = (La, Lb) => {
    if(La.length != Lb.length) return false;
    let ListA = La;
    let tempLA = [...ListA];
    let listB = Lb;
    const la_length = ListA.length;
    for(let index = 0; index < la_length; index++) {
        const foundInOtherList = listB.findIndex(elem => elem == ListA[index]) > -1
        if(foundInOtherList) {
            const tempIndex = tempLA.findIndex(ele => ele == ListA[index])
            tempLA.splice(tempIndex, 1);
        }
    }
    console.log(tempLA)
    return tempLA.length > 0 ? false : true;
}
const la = ["Akoni", "Mayowa", "Olabode"];
const lb = ["Tolani", "Akoni", "Mayowa"]

const result = compareListExactEquality(la, lb);
console.log(result)