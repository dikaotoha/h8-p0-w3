function mengelompokkanAngka(arr) {
    var tampungGenap = [];
    var tampungGanjil = [];
    var tampungKelipatanTiga = [];
    var cetak = [];
    // you can only write your code here!
    for (var i = 0; i < arr.length; i++) {
        // console.log('loop');
        if (arr[i] % 3 === 0) {
            tampungKelipatanTiga.push(arr[i]);
        }
        else if (arr[i] % 2 === 1) {
            tampungGanjil.push(arr[i]);
        }
        else if (arr[i] % 2 === 0) {
            tampungGenap.push(arr[i]);
        }
    }
    cetak.push(tampungGenap, tampungGanjil, tampungKelipatanTiga);
    return cetak;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

//hasil salah
// if (arr[i] % 2 === 0) {
//     genap.push(arr[i]);
// }
// else if (arr[i] % 2 === 1) {
//     ganjil.push(arr[i]);
// }
// else if (arr[i] % 3 === 0) {
//     kelipatanTiga.push(arr[i]);
// }