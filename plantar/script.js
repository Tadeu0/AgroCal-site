function varidar() {
    const selectplantas = document.getElementById("plantas").value 
    const selectsolo = document.getElementById("solo").value 
    const chuva = document.getElementById("chuva").value
    const temperatura = document.getElementById("temperatura").value
    

    // Tomate 
if (selectplantas === "tomate" && selectsolo === "arenoso") {
    alert("escolha outro tipo de solo")
}

else if (selectplantas === "tomate" && selectsolo === "argiloso") {
    let temp_ideal = 0
    let temp_aceitavel = 0
    let temp_fora = 0
    let chuva_ideal = 0
    let chuva_aceitavel = 0
    let chuva_fora = 0

    // Temperatura
    if (Number(temperatura) >= 24 && Number(temperatura) <= 28) {
        temp_ideal = 40 // pontuação
    }
    else if (Number(temperatura) >= 20 && Number(temperatura) <= 30) {
        temp_aceitavel = 25
    }
    else {
        temp_fora = 10
    }

    // Chuva
    if (Number(chuva) >= 25 && Number(chuva) <= 40) {
        chuva_ideal = 30 
    }
    else if (Number(chuva) >= 20 && Number(chuva) <= 24) {
        chuva_aceitavel = 15
    }
    else {
        chuva_fora = 10
    }

    // Soma geral
    let temp_geral = temp_ideal + temp_aceitavel + temp_fora
    let chuva_geral = chuva_ideal + chuva_aceitavel + chuva_fora


    const pont = document.getElementById("pontuação")
    const text = document.getElementById("text")

    pont.innerText = temp_geral + chuva_geral

    if(Number(pont) >= 85 && Number(pont) <= 100){
        text.innerText  = "As condições estão ideais, ótimo momento para cultivar."
    }
    else if(Number(pont) >= 60 && Number(pont) <= 84){
        text.innerText  = "Condições razoáveis, com pequenos ajustes é possível plantar."
    }
    else if(Number(pont) >= 35 && Number(pont) <= 59){
        text.innerText  = "Condições medianas, talvez seja melhor adiar o plantio ou ajustar fatores."
    }
    else {
        text.innerText  = "As condições não são adequadas para essa planta."
    }
}




    // Milho
    if(selectplantas === "milho" && selectsolo === "argiloso"){
        alert("Tipo de solo Inadequado escolha outro")
    }
    else if(selectplantas === "milho" && selectsolo === "arenoso"){
       let temp_ideal_mi = 0
       let temp_aceitavel_mi = 0
       let temp_fora_mi = 0

       if(Number(temperatura) >= 25 && Number(temperatura) <= 33){
        temp_ideal_mi = 40
        alert(temp_ideal_mi)
       }
       else if(Number(temperatura) >= 18 && Number(temperatura) <= 35){
        temp_aceitavel_mi = 25
        alert(temp_aceitavel_mi)
       }
       else{
        temp_fora_mi = 10
        alert(temp_fora_mi)
       }
       let chuva_ideal_mi
       let chuva_aceitavel_mi
       let chuva_fora_mi      
       if(Number(chuva) >= 30 && Number(chuva) <= 50){
        chuva_ideal_mi = 30
       }
        else if(Number(chuva) >= 20 && Number(chuva) <= 29){
        chuva_aceitavel_mi = 15
       }
       else{
        chuva_fora_mi = 10
       }
    }
    
    
}






// | Planta         | Temperatura Ideal (°C) | Temperatura Aceitável (°C) | Chuva Ideal (mm/semana) | Chuva Aceitável (mm/semana) | Tipo de Solo Ideal     | Tipo de Solo Aceitável |
// | -------------- | ---------------------- | -------------------------- | ----------------------- | --------------------------- | ---------------------- | ---------------------- |
// | **Tomate** 🍅  | 20–28                  | 15–32                      | 25–40                   | 20–50                       | Argiloso               | Misto                  |
// | **Milho** 🌽   | 25–33                  | 18–35                      | 30–50                   | 20–60                       | Arenoso                | Misto                  |
// | **Alface** 🥬  | 15–20                  | 10–25                      | 25–40                   | 15–50                       | Misto ou argiloso leve | —                      |
// | **Feijão** 🌾  | 20–28                  | 16–32                      | 30–45                   | 20–55                       | Misto                  | —                      |
// | **Cenoura** 🥕 | 18–24                  | 12–28                      | 25–40                   | 15–50                       | Arenoso                | —                      |
// | **Batata** 🥔  | 16–22                  | 10–26                      | 25–40                   | 15–50                       | Arenoso                | Misto                  |
