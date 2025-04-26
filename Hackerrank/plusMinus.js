function plusMinus(arr) {
    // Write your code here
    const totalNumbers = arr.length;
    const positiveNumbers = arr.filter(numbers => numbers > 0).length;
    const negativeNumbers = arr.filter(numbers => numbers < 0).length;
    const zeroNumbers = arr.filter(numbers => numbers == 0).length;

    const positiveRatio = (positiveNumbers/totalNumbers).toFixed(6);
    const negativeRatio = (negativeNumbers/totalNumbers).toFixed(6);
    const zeroRatio = (zeroNumbers/totalNumbers).toFixed(6);

    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(zeroRatio)
}

plusMinus([-4, 3, -9, 0, 4, 1])