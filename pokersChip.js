const getChip = (request)  => {
    if(request == 0) return [];
    let _chips = [100, 50, 25, 10, 5, 1];
    //#region My initial solution
    // const selectedChips= []
    // let remainder = request;
    // let target =  0
    // let i = 0;
    // while(target != request ) {
    //     let chip = _chips[i]
    //     if(remainder >= chip) {
    //         let dividend = Math.trunc(remainder / chip);
    //         for (let x = 0; x < dividend; x++) {
    //             selectedChips.push(chip);
    //         }
    //         target += chip * dividend;
    //         remainder = request - target; 
    //     }
    //     if(i < _chips.length) {
    //         i++;
    //     }
    //     else {
    //         i = 0;
    //     }
    // }
    //#endregion 

    //#region copied solution form book cracking the toptal interview
    for(chip of _chips) {
        let dividend = Math.trunc(request / chip)
        for (let x = 0; x < dividend; x++) {
            selectedChips.push(chip);
        }
        request = request - (chip * dividend);
    }
    //#endregion
    console.log("The minimum chip is: " + selectedChips.length)
    console.log(selectedChips)
    return selectedChips;
}

// In solving these problems we should understand that problems are in levels - 
    //that's like asking what is the firat thing i need to do - first level,
       // what are those things I need to do here
    //then, what is the next thing - next level
       // what are those things I need to do here
    // then, have I reached the end - end consideration, (No. Then, what is the next thing)
// levels usually have conditions they should satisfy - 
    // one at a time (like if, else-if .., else) or 
    // together (if, ..if) with separate conditions
    // determine what should be on each level
// any level may depend on another level
// level may need to repeat or cycle - loop
// there should be an approprate presentation of input for each level


getChip(273);