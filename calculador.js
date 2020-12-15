console.log("Validar identificador prueba");
var cedula = null;
//Llamada boton
function validar(){
    cedula = Array.from(document.getElementById("cedula").value);
    let validador, par=0, suma = 0;
    if(cedula.length != 10){
        alert("El numero no es valido");
    }
    else{
        for (let n = cedula.length - 1; n>=0; n--) {
            par++
            if((par % 2) != 0){ 
                cedula[n]= cedula[n]*2;
                if(cedula[n] > 9) cedula[n] = ((cedula[n] % 10)+1);
            };
            console.log(cedula[n]);
            x= parseInt(cedula[n]);
            suma= suma + x;
        };
        if ((suma % 10) != 0){
            validador=((suma*9) % 10);
            alert("El numero validador es: " + validador);
        }
        else{
            alert("El numero validador es: 0");
        };
    };
};