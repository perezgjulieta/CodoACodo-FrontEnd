function validarDatos(){
    var nombre, apellido, edad, correo, mensaje, expresion;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;
    mensaje = document.getElementById("mensaje").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellido === "" || edad === "" || correo === "" || mensaje === ""){
        alert("Los campos con (*) son obligatorios.");
        return false;
    } 
    else if(nombre.length > 25){
        alert("El nombre es muy largo.");
        return false;
    }
    else if(apellido.length > 35){
        alert("El apellido es muy largo.");
        return false;
    }
    else if(edad > 110){
        alert("La edad es inválida.");
        return false;
    }
    else if(correo.length > 100){
        alert("El correo es muy largo.");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo es inválido.")
        return false;
    }
    else if(mensaje.length > 1000){
        alert("El mensaje es muy largo. Intentá que tenga menos de 1000 caracteres.");
        return false;
    }
    else{
        alert("¡Tu mensaje fue enviado!");
        return true;
    }
}