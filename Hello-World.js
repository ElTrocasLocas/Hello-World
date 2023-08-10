let Gay = 3
let DiegoCabrera = Gay ;
let mensaje;

if( DiegoCabrera > 0 && DiegoCabrera < 3 ){
    mensaje = "Login failed, please login manually and press continue";
}
else if( DiegoCabrera == Gay ){
    mensaje = "Hello World";
}
else if( DiegoCabrera > 4 ){
    mensaje = "RA does not exist please select manually and press continue";
}

else{
    mensaje = "Automation failed please continue manually";
}

console.log(mensaje);