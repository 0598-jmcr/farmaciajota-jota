function iniciar(){
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;

    if(usuario == "" || clave == ""){
        alert("Rellene los campos");
        return false;
    } else if(usuario == "admin" && clave == "admin"){
        alert("Bienvenido Administrador a Farmacia Jota-Jota");
        window.location = "/Users/Usuario/Desktop/farmaciajota-jota/inicioadministrador.html";
        return false;
    } else if(usuario == "usuario" && clave == "usuario"){
        alert("Farmacia Jota-Jota te da una cordial bienvenida");
        window.location = "/Users/Usuario/Desktop/farmaciajota-jota/inicioUsuario.html";
        return false;
    } else {
        alert("Datos incorrectos, verifique usuario y contraseña");
        return false;
    }
}