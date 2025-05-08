let miDiv = document.getElementById("d1");

// Recorremos los números del 1 al 50
for (let i = 1; i <= 50; i++) {
    // Excluimos los múltiplos de 9 y 13
    if (i % 9 != 0 && i % 13 != 0) {
        miDiv.innerHTML= miDiv.innerHTML + i;
    }
}