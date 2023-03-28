exports.findSqrt = (number) => {
    let guess = number / 2; // initial guess
    let i;
    for (i = 0; i < 10; i++) { // iterate 10 times for accuracy
    guess = (guess + (number / guess)) / 2; // improve the guess
    }
    return guess;
}