// In this problems we are actually considering the fllowing things
  // while each has its own specific condition
  // I would say this is like a tree problem
  // => first, we consider brackets - since they are on the out most part
     // for the brackets we have to check whether they are balanced
     // => next we would consider numbers since they would usually come after the brackets
        // we dont really have any special considerations for numbers
        // => next we would consider the operators since they would follow the numbers
           // for the operators we want to consider them in order according to BODMAS
           // => we would consider what's on the right side of the operator as that is the flow of operations
           // => since the right hand side operator may contain brackets we can return back to first step
     
// It is O(n) problem
const checkBracketsBalancing = (strEquation) => {
    const startingBrackets = ["{", "[", "("]
    let stringEquationCopy = strEquation;
    // would be used to track if any bracket is not balanced.
    let balanced = true;
    // we can say while balanced
    while(balanced) { // We actually built a tree here - this is a node (root)
        if(startingBrackets.includes(stringEquationCopy[0])) {
            let brckt = stringEquationCopy[0]

            let bracketObj = hasBalancedBracket(stringEquationCopy, brckt);
            if(!bracketObj.balanced) {
                balanced = false;
                // logging the bracket not balanced
                console.log("breaking from loop ...")
                console.log(stringEquationCopy[0])
                console.log(bracketObj)
                break;
            }
            stringEquationCopy = bracketObj.str
            continue;
        }
        // we can check whether next string is a number 
        else if(!isNaN(Number(stringEquationCopy[0]))) { // this another node branching out
            //check for operators * or /
            // According to BODMAS we check for "/" first
            if(stringEquationCopy.indexOf("/") > -1) { // this is a branch node
                //
                stringEquationCopy = splitStringArrOn("/", stringEquationCopy)
                //balanced = !foundClosingBracket(stringEquationCopy); We can do this to ensure there are no useless closing bracket
                // continue the iteration
                continue;
                // INFACT: We can save the last string element in an object tree
                /* like so {
                    "lastStringElem" : {
                        "operator" :"",
                        "lastStringElem"
                    }
                }
                 *
                 */
            }
            else if(stringEquationCopy.indexOf("*") > -1) {
                stringEquationCopy = splitStringArrOn("*", stringEquationCopy)
                // continue the iteration
                continue;
            }
            else if(stringEquationCopy.indexOf("+") > -1) {
                stringEquationCopy = splitStringArrOn("+", stringEquationCopy)
                // continue the iteration
                continue;
            }
            else if(stringEquationCopy.indexOf("-") > -1) {
                stringEquationCopy = splitStringArrOn("-", stringEquationCopy)
                // continue the iteration
                continue;
            }
            else {

                break;
            }
        } 
        // we can check whether next string is a number 

    }

    console.log("The balaced state is: ", balanced)
    return balanced;

}

const splitStringArrOn = (opertr, str) => {
    let divisionSplitArr = str.split(opertr)
    let lastSplitArrElem = divisionSplitArr[divisionSplitArr.length - 1]
    return lastSplitArrElem;
}

const hasBalancedBracket = (str, brckt) => {
    const brackets = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    let result = false;
    str = str.trim()
    //const strLength = str.length;

    if(str.indexOf(brckt) == 0) {
        let strArr = str.split('');
        strArr.shift();
        str = strArr.join('');
        // reverse str
        str = str.split("").reverse().join('').trim();
        if(str.indexOf(brackets[brckt]) > -1)
        {
            strArr = str.split('');
            strArr.shift();
            str = strArr.join('');
            result = true;
        }
        str = str.split("").reverse().join('');
    }
    return {
        str: str,
        balanced: result
    }
}

const foundClosingBracket = (str) => {
    const closingBrackets = [")", "]", "}"]
    let found = false;
    closingBrackets.forEach(brack => {
        found = str.indexOf(brack) > -1
    })
    return found;
}

let strEquation = "([3)"
checkBracketsBalancing(strEquation)



// next: we would check for brackets again