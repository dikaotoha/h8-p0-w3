function targetTerdekat(arr) {
    // you can only write your code here!
    var awal = 0;
    var ketemu = 0;
    var xIndex = awal;
    var jarak = 0;
    var jarakK = 0;
    for (var i = 0; i < arr.length; i++) {
        // console.log(awal, 'awal');
        if (arr[i] === 'o') {
            awal = i;
            break;
        }
    }
    for (var j = awal; j < arr.length; j++) {
        // console.log(xIndex, 'for j');
        if (arr[j] === 'x') {
            xIndex = jarak;

            return xIndex;
        }
        jarak += 1
    }
    for (var k = awal; k > 0; k--) {
        // console.log(jarak, 'jarak k');
        // console.log(k, 'for k');
        if (arr[k] === 'x') {
            xIndex = jarakK;
            // console.log(xIndex, 'for k');
            return xIndex;
        }
        jarakK += 1;
    }
    return 0;
}
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2