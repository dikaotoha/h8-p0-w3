var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2() {
    input.splice(1,1, "Roman Alamsyah Elsharawy");
    input.splice(2,1,"Provinsi Bandar Lampung");
    input.splice(4,1,"SMA Internasional Metro");
    console.log(input);
    var tampungSplit = input[3].split("/");
    // console.log(tampungSplit);
    var bulan='';
    switch (tampungSplit[1]) {
        case '01':
            bulan+='Januari';
            break;

        case '02':
            bulan+='Februari';
            break;

        case '03':
            bulan+='Maret';
            break;

        case '04':
            bulan+='April';        
            break;

        case '05':
            bulan+='Mei';    
            break;

        case '06':
            bulan+='Juni';
            break;
        
        case '07':
            bulan+='Juli';
            break;

        case '08':
            bulan+='Agustus';
            break;

        case '09':
            bulan+='September';
            break;

        case '10':
            bulan+='Oktober';
            break;

        case '11':
            bulan+='November';
            break;

        case '12':
            bulan+='Desember';
            break;
    }
    console.log(bulan);
    
    tampungSplit.sort(function(value1, value2){return parseInt(value1)<parseInt(value2)});
    console.log(tampungSplit);
    console.log(tampungSplit.join(" - "));
    var irisNama = input[1].slice(0,15);
    console.log(irisNama);
}

// console.log(dataHandling2(input));
dataHandling2(input);



/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

// var arr = ["buku", "laptop", "komputer"];
// arr.splice(2, 0, "televisi"); // Menghapus 0 nilai dari index 2, dan menambah 1 nilai yaitu "televisi" pada index 2.
// console.log(arr); // ["buku", "laptop", "televisi", "komputer"]

// arr.splice(0, 2); // Menghapus 2 nilai dari index 0
// console.log(arr); // ["televisi", "komputer"]

// arr.splice(0, 1, "majalah", "koran"); // Menghapus 1 nilai dari index 0, dan menambah 2 nilai yaitu "majalah" dan "koran"
// console.log(arr); // [majalah", "koran", "komputer"]