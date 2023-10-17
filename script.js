function calcular() {
    var Nota1 = parseFloat(a1.value);
    var Nota2 = parseFloat(r1.value);
    var Nota3 = parseFloat(a2.value);
    var Nota4 = parseFloat(r2.value);
    var Nota5 = parseFloat(a3.value);
    var Nota6 = parseFloat(r3.value);
   
    var maior1 = 0;
    var maior2 = 0;
    var maior3 = 0;


    if (Nota1 >= Nota2) {
        maior1 = Nota1;
    }
    else {
        maior1 =Nota2;
    }
  
    
    if (Nota3 >= Nota4) {
        maior2 = Nota3;
    }
    else {
        maior2 = Nota4;
    }
    
    
    
    if (Nota5 >= Nota6) {
        maior3 = Nota5;
    }
    else {
        maior3 = Nota6;
    }
    alert("1tri" + maior1 + "2tri" + maior2 + "3tri" + maior3) 





}

