// ( + ) single alphanumeric char
// ( * ) sequence of 3 same characters
// ( *{N} ) sequence of N same charecters
/// !!! assuming that {N} is between 1 and 9 // TODO: rework for bigger

// '+++++* abcdemmmmmm' should return false
// '**+*{2} mmmrrrkbb' should return true
// '++*{5} gheeeee' should return true

const input = '++*{5} gheeeee';

function stringChallenge(text) {
    const [firstString, secondString] = text.split(' ');
    let firstArray = firstString.trim().split('');
    let secondArray = secondString.trim().split('');

    console.log(firstArray)
    console.log(secondArray)

    // console.log(firstString.match(/\*{\d+}/))

    // ',,,'.replace(/,/g, '') // delete all commas

    let result = [];

    for (const [index, char] of firstArray.entries()) {
        const nextThree = firstArray.slice(index + 1, index + 4).toString().replace(/,/g, '');

        if (char === '*' && nextThree.match(/{\d}/)) {
            const number = parseInt(nextThree.match(/\d/)[0]);

            let isOk = [];
            for (let i = 0; i < number; i++) {
                if (secondArray[i] === secondArray[i + 1]) {
                    isOk.push(true);
                } else {
                    isOk.push(false);
                }
            }

            if (isOk.length === number && !isOk.includes(false)) {
                console.log('all good');
                secondArray = secondArray.slice(number)
                result.push(true);
            } else {
                console.log('not good');
                console.log(isOk)
                result.push(false);
                break;
            }
        } else if (char === '*') {
            if (secondArray[0] === secondArray[1] && secondArray[0] === secondArray[2] && secondArray[0] !== secondArray[3]) {
                console.log('ales gut')
                secondArray = secondArray.slice(3)
                result.push(true);
            } else {
                console.log('not good');
                result.push(false);
                break;
            }
        } else if (char === '+') {
            if (secondArray[0].toString().match(/[a-z0-9]/i)) {
                console.log('alles good')
                secondArray = secondArray.slice(1)
                result.push(true);
            } else {
                console.log('not good');
                result.push(false);
                break;
            }
        }
    }

    return !result.includes(false);
}

console.log(stringChallenge(input))
