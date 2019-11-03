function groupAnimals(animals) {
    // you can only write your code here!
    var tampungAnimals = [];
    var cekHurufDepan = false;
    var temp = '';

    for (var i = 0; i < animals.length; i++) {
        // console.log(i, 'loop i');
        temp = animals[i];
        cekHurufDepan = false;
        // console.log('temp ', temp, ' dan ', 'cek huruf depan', cekHurufDepan);
        for (var j = 0; j < tampungAnimals.length; j++) {
            // console.log('loop j');
            if (temp[0] === tampungAnimals[j][0][0]) {

                tampungAnimals[j].push(temp);
                cekHurufDepan = true;
                // console.log(tampungAnimals, 'tampungAnimals');
            }
        }

        if (cekHurufDepan === false) {
            tampungAnimals.push([temp]);
            // console.log('tampungAnimals cek huruf depan=false');
        }
    }

    tampungAnimals.sort();
    return tampungAnimals;
}

// TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array
// yang berisi string.Function akan me -return array multidimensi dimana array tersebut berisikan
// kategori / kelompok array yang dikumpulkan sesuai dengan abjad depannya.Abjad harus berurut
// dari a - z(jika ada).Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animalsadalah["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [["ayam"], ["bebek", "bangau"], ["kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.