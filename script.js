function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    let expresion = document.getElementById("pantalla").value;
    try {
        document.getElementById("pantalla").value = eval(expresion);
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}