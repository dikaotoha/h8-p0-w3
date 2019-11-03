function targetTerdekat(arr) {
    // you can only write your code here!
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o' || arr[i] === 'x') {
            if (arr[0] === 'o' || arr[0] === 'x') {
                for (var j = i; j < arr.length; j++) {
                    if (arr[j] === 'o' || arr[j] === 'x') {
                        return j + 1;
                    }
                    if (arr[j] !== 'o' || arr[j] !== 'x') {
                        return 0;
                    }
                }
            }
            for (var j = i; j < arr.length; j++) {
                if (arr[j] === 'o' || arr[j] === 'x') {
                    return j + 1;
                }
                if (arr[j] !== 'o' || arr[j] !== 'x') {
                    return 0;
                }
            }

        }
    }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2