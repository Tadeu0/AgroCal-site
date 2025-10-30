function varidar() {
    const selectplantas = document.getElementById("plantas").value 
    const selectsolo = document.getElementById("solo").value 
    const area = document.getElementById("area").value
    const chuva = document.getElementById("chuva").value
    const temperatura = document.getElementById("temperatura").value
    

    if(selectplantas === "tomate" && selectsolo === "arenoso"){
        alert(selectplantas)
        alert(selectsolo)
    }
    
}