// var balikNum = '';
// var tempNum = '';
function angkaPalindrome(num) {
    // you can only write your code here


    for (var j = 0; j < num; j++) {
        num++;
        var tempNum = '';
        tempNum += String(num);

        var balikNum = '';
        for (var i = tempNum.length - 1; i >= 0; i--) {
            //string num dibalik dan dimasukkan ke variabel balikNum
            // console.log(tempNum);
            // console.log("masuk loop");
            balikNum += tempNum[i];
            // console.log(balikNum);
        }
        if (balikNum === tempNum) {
            return num;
            // false;
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(170)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

//   Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka.
//    Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome.
//     Contoh, jika angka adalah 27, maka function akan me-return nilai 33
//      karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan 
//      palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
//      Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka 
//      selanjutnya yang palindrome, yaitu 9.