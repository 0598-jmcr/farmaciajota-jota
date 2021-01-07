function validar() {
    var nombre, cedula, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    cedula = document.getElementById("cedula").value;
    telefono = document.getElementById("telefono").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre == "" || telefono == "" || cedula == "" ){
        alert("Algunos campos son obligatorios");
        return false;
    } else if(!expresion.test(correo)){
        alert("Correo no valido");
        return false;
    } else {
        alert("Turno generado correctamente");
        window.location = "/Users/Usuario/Desktop/farmaciajota-jota/inicioUsuario.html";
        return false;
    }
}