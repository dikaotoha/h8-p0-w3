function pasanganTerbesar(num) {
    var tampungNum = '';
    var arrayNum = [];
    var numString = '';
    var maxNum = -1;
    numString += String(num);
    console.log(numString);
    for (var i = 0; i < numString.length - 1; i++) {
        // tampungNum += '';
        tampungNum += numString[i] + numString[i + 1];
        console.log(tampungNum);
        console.log('loop ke', i);
        if (numString.length > 1) {
            arrayNum.push(Number(tampungNum));
            tampungNum = '';
            // console.log('ini array num', arrayNum);
        }
    }
    for (var i = 0; i < arrayNum.length; i++) {
        if (i === 0) {
            maxNum = arrayNum[i];
            // console.log('maxnumber nih', maxNum);
        }
        else {
            if (arrayNum[i] > maxNum) {
                maxNum = arrayNum[i];
                console.log('maxnumber nih', maxNum);
            }
        }
        console.log('ini arnum', arrayNum);

    }
    return maxNum;
}
// you can only write your code here!

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
// console.log(pasanganTerbesar(12783456)); // 83
// console.log(pasanganTerbesar(910233)); // 91
// console.log(pasanganTerbesar(71856421)); // 85
// console.log(pasanganTerbesar(79918293)); // 99

// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka.
// Function akan menentukan pasangan dua digit angka mana yang paling besar dan me -return angka tersebut.
// Contoh, jika angka adalah 183928, maka function akan me -return 92, pasangan dua digit angka yang paling
// besar diantara yang lainnya.