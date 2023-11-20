function escriboSum (num) {
    let result = 0;

    if (typeof(num) != 'number') 'O valor não é um número.';

    for (let counter = 0; counter < num; counter++) {
        if ((counter % 3 == 0) || (counter % 5 == 0)) {
            result += counter;
        }
    }

    return result;
}

console.log(escriboSum(11))