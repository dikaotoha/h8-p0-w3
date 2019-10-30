function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    // var kata = kalimat.split(" ");
    var totalKata=0;
    tampungKata='';
    arrayKata=[];
    for(var i=0; i<kalimat.length ;i++ ){
        tampungKata+=kalimat[i];
        if(kalimat[i]===' '|| i===kalimat.length-1){
            arrayKata.push(tampungKata);
            tampungKata='';
        }
    }    
    return arrayKata;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5