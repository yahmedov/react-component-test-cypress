// '+++++* abcdemmmmmm' should return false
// '**+*{2} mmmrrrkbb' should return true

const input = '**+*{2} mmmrrrkbb' // **+*{2} mmmrrrkbb

// ( + ) single alphanumeric char
// ( * ) sequence of 3 same characters
// ( *{N} ) sequence of N same charecters

function stringChallenge(text) {

    const [firstString, secondString] = text.split(' ');
    const firstArray = firstString.trim().split('');
    const secondArray = secondString.trim().split('');

    let result = [];

    firstArray.forEach((char, index) => {
        if (char === '+') {
            if (secondArray[index].match(/[a-z0-9]/i)) {
                result.push(true);
            } else {
                result.push(false);
            }
        }


        if (char === '*') {
            if (firstArray[index + 1] === '{' && firstArray[index + 2].match(/\d/) && firstArray[index + 3] === '}') {
                const number = parseInt(firstArray[index + 2]);

                for (let i = 0; i < number; i++) {
                    console.log('in loop')
                    if (secondArray[index + i] === secondArray[index + 1 + i] && secondArray[index + i] !== secondArray[index + 2 + i]) {
                        result.push(true);
                    } else {
                        result.push(false);
                    }
                }
            } else if (firstArray[index - 1] === '*') {
                console.log('edge case')
                if (
                    secondArray[index + 2] === secondArray[index + 3] &&
                    secondArray[index + 2] === secondArray[index + 4] &&
                    secondArray[index + 2] !== secondArray[index + 5]
                ) {
                    result.push(true);
                } else {
                    result.push(false);
                }
            } else {
                if (
                    secondArray[index] === secondArray[index + 1] &&
                    secondArray[index] === secondArray[index + 2] &&
                    secondArray[index] !== secondArray[index + 3]
                ) {
                    result.push(true);
                } else {
                    result.push(false);
                }
            }
        }
    });

    console.log(result)

    return !result.includes(false);
}

console.log(stringChallenge(input));
