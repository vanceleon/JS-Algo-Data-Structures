const num1 = 24;
const num2 = 42;

function sameFrequency(n1, n2) {
    if (n1.length !== n2.length) return false;
    const split1 = n1.toString().split('');
    const split2 = n2.toString().split('');
    // const split2 = n2.split('');
    const numObj = {};
    
    for (let i = 0; i < split1.lenght; i++) {
        // if (num)
        numObj = split1[i];
        console.log(numObj)
    }
}
sameFrequency(num1, num2);