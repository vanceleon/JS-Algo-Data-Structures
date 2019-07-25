
function isBalanced(s) {
    s.forEach(bracketString => {
      if (checkBrackets(bracketString)) {
        console.log("YES");
      } else {
        console.log("NO");
      }
      // console.log(checkBrackets(bracketString));
    });
    // for (let i = 0; i < s.length; i++) {
    //     if (checkBrackets(s[i])) { 
    //         console.log('YES');
    //     } else {
    //         console.log('NO');
    //     }
    // }
    // console.log('outside');
}

function checkBrackets(brackets) {
    const bracketObj = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const openers = "{[(";
    const closers = "}])";
    const stack = [];
    for (let i = 0; i < brackets.length; i++) {
        if (openers.indexOf(brackets[i]) > -1) {
            stack.push(brackets[i]);  
        } else {
            const current = stack.pop();
            if (bracketObj[current] !== brackets[i]) {
                return false;
            }
        }
    }
    return true;
}

isBalanced(['{[()]}',
'{[(])}',
'{{[[(())]]}}']);