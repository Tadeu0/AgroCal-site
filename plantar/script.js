function varidar() {
    const selectplantas = document.getElementById("plantas").value 
    const selectsolo = document.getElementById("solo").value 
    const chuva = document.getElementById("chuva").value
    const temperatura = document.getElementById("temperatura").value
    const area = document.getElementById("area")
    
    


 //#region  Tomate
if (selectplantas === "seleconar" && selectsolo === "argiloso" ) {
    alert("Selecione um campo de plantil")
}
if (selectplantas === "tomate" && selectsolo === "seleconar" ) {
    alert("Selecione um campo do tipo de solo")
}
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
    let area_ideal = 0
    let area_aceitavel = 0
    let area_fora = 0

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

    // área 
   if (Number(area) >= 50 ) {
       area_ideal = 10
    }
    else if (Number(area) >= 30 && Number(area) <= 49) {
       area_aceitavel = 5
    }
    else {
       area_fora = 2
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
    let area_geral = area_ideal + area_aceitavel + area_fora


    const pont = document.getElementById("pontuação")
    const text = document.getElementById("text")

    const pont_total = temp_geral + chuva_geral + area_geral
    pont.innerHTML = pont_total

    if(pont_total >= 85 && pont_total <= 100){
        text.innerText  = "As condições estão ideais, ótimo momento para cultivar."
    }
    else if(pont_total  >= 60 && pont_total <= 84){
        text.innerText  = "Condições razoáveis, com pequenos ajustes é possível plantar."
    }
    else if(pont_total >= 35 && pont_total <= 59){
        text.innerText  = "Condições medianas, talvez seja melhor adiar o plantio ou ajustar fatores."
    }
    else {
        text.innerText  = "As condições não são adequadas para essa planta."
    }
      


}


//#endregion

//#region Milho
    if (selectplantas === "seleconar" && selectsolo === "arenoso") {
    alert("Selecione um campo de plantil")
}
if (selectplantas === "milho" && selectsolo === "seleconar" ) {
    alert("Selecione um campo do tipo de solo")
}
if (selectplantas === "milho" && selectsolo === "argiloso") {
    alert("escolha outro tipo de solo")
}

else if (selectplantas === "tomate" && selectsolo === "arenoso") {
    let temp_ideal_m = 0
    let temp_aceitavel_m = 0
    let temp_fora_m = 0
    let chuva_ideal_m = 0
    let chuva_aceitavel_m = 0
    let chuva_fora_m = 0
    let area_ideal_m = 0
    let area_aceitavel_m = 0
    let area_fora_m = 0

    // Temperatura
    if (Number(temperatura) >= 25 && Number(temperatura) <= 33) {
        temp_ideal_m = 40 // pontuação
    }
    else if (Number(temperatura) >= 18 && Number(temperatura) <= 35) {
        temp_aceitavel_m = 25
    }
    else {
        temp_fora_m = 10
    }

    // área 
   if (Number(area) >= 80 ) {
       area_ideal_m = 10
    }
    else if (Number(area) >= 50 && Number(area) <= 79) {
       area_aceitavel_m = 5
    }
    else {
       area_fora_m = 2
    }



    // Chuva
    if (Number(chuva) >= 30 && Number(chuva) <= 50) {
        chuva_ideal_m = 30 
    }
    else if (Number(chuva) >= 20 && Number(chuva) <= 60) {
        chuva_aceitavel_m = 15
    }
    else {
        chuva_fora_m = 10
    }

    // Soma geral
    let temp_geral_m = temp_ideal_m + temp_aceitavel_m + temp_fora_m
    let chuva_geral_m = chuva_ideal_m + chuva_aceitavel_m + chuva_fora_m
    let area_geral_m = area_ideal_m + area_aceitavel_m + area_fora_m


    const pont = document.getElementById("pontuação_m")
    const text = document.getElementById("text")

    const pont_total_m = temp_geral_m + chuva_geral_m + area_geral_m
    pont.innerHTML = pont_total_m

    if(pont_total_m >= 85 && pont_total_m <= 100){
        text.innerText  = "As condições estão ideais, ótimo momento para cultivar."
    }
    else if(pont_total_m  >= 60 && pont_total_m <= 84){
        text.innerText  = "Condições razoáveis, com pequenos ajustes é possível plantar."
    }
    else if(pont_total_m >= 35 && pont_total_m <= 59){
        text.innerText  = "Condições medianas, talvez seja melhor adiar o plantio ou ajustar fatores."
    }
    else {
        text.innerText  = "As condições não são adequadas para essa planta."
    }
      


}

    //#endregion

//#region Alface
if (selectplantas === "seleconar" && selectsolo === "misto") {
    alert("Selecione um campo de plantil")
}
if (selectplantas === "alface" && selectsolo === "seleconar" ) {
    alert("Selecione um campo do tipo de solo")
}
if (selectplantas === "alface" && selectsolo === "arenoso") {
    alert("escolha outro tipo de solo")
}

else if (selectplantas === "alface" && selectsolo === "misto") {
    let temp_ideal_a= 0
    let temp_aceitavel_a = 0
    let temp_fora_a = 0
    let chuva_ideal_a = 0
    let chuva_aceitavel_a = 0
    let chuva_fora_a = 0
    let area_ideal_a = 0
    let area_aceitavel_a = 0
    let area_fora_a = 0

    // Temperatura
    if (Number(temperatura) >= 15 && Number(temperatura) <= 20) {
        temp_ideal_a = 40 // pontuação
    }
    else if (Number(temperatura) >= 10 && Number(temperatura) <= 25) {
        temp_aceitavel_a = 25
    }
    else {
        temp_fora_a = 10
    }

    // área 
   if (Number(area) >= 30 ) {
       area_ideal_a = 10
    }
    else if (Number(area) >= 20 && Number(area) <= 29) {
       area_aceitavel_a = 5
    }
    else {
       area_fora_a = 2
    }



    // Chuva
    if (Number(chuva) >= 25 && Number(chuva) <= 40) {
        chuva_ideal_a = 30 
    }
    else if (Number(chuva) >= 15 && Number(chuva) <= 50) {
        chuva_aceitavel_a = 15
    }
    else {
        chuva_fora_a = 10
    }

    // Soma geral
    let temp_geral_a = temp_ideal_a + temp_aceitavel_a + temp_fora_a
    let chuva_geral_a = chuva_ideal_a + chuva_aceitavel_a + chuva_fora_a
    let area_geral_a = area_ideal_a + area_aceitavel_a + area_fora_a


    const pont = document.getElementById("pontuação_a")
    const text = document.getElementById("text")

    const pont_total_a = temp_geral_a + chuva_geral_a + area_geral_a
    pont.innerHTML = pont_total_a

    if(pont_total_a >= 85 && pont_total_a <= 100){
        text.innerText  = "As condições estão ideais, ótimo momento para cultivar."
    }
    else if(pont_total_a  >= 60 && pont_total_a <= 84){
        text.innerText  = "Condições razoáveis, com pequenos ajustes é possível plantar."
    }
    else if(pont_total_a >= 35 && pont_total_a <= 59){
        text.innerText  = "Condições medianas, talvez seja melhor adiar o plantio ou ajustar fatores."
    }
    else {
        text.innerText  = "As condições não são adequadas para essa planta."
    }
      


}
//#endregion

//#region Batata
if (selectplantas === "seleconar" && selectsolo === "argiloso") {
    alert("Selecione um campo de plantil")
}
if (selectplantas === "batata" && selectsolo === "seleconar" ) {
    alert("Selecione um campo do tipo de solo")
}
if (selectplantas === "batata" && selectsolo === "arenoso") {
    alert("escolha outro tipo de solo")
}

else if (selectplantas === "batata" && selectsolo === "argiloso") {
    let temp_ideal_b = 0
    let temp_aceitavel_b = 0
    let temp_fora_b = 0
    let chuva_ideal_b = 0
    let chuva_aceitavel_b = 0
    let chuva_fora_b = 0
    let area_ideal_b = 0
    let area_aceitavel_b = 0
    let area_fora_b = 0

    // Temperatura
    if (Number(temperatura) >= 16 && Number(temperatura) <= 22 ) {
        temp_ideal_b = 40 // pontuação
    }
    else if (Number(temperatura) >= 10 && Number(temperatura) <= 26) {
        temp_aceitavel_b = 25
    }
    else {
        temp_fora_b = 10
    }

    // área 
   if (Number(area) >= 50 ) {
       area_ideal_b = 10
    }
    else if (Number(area) >= 30 && Number(area) <= 49) {
       area_aceitavel_b = 5
    }
    else {
       area_fora_b = 2
    }



    // Chuva
    if (Number(chuva) >= 25 && Number(chuva) <= 40) {
        chuva_ideal_b = 30 
    }
    else if (Number(chuva) >= 15 && Number(chuva) <= 50) {
        chuva_aceitavel_b = 15
    }
    else {
        chuva_fora_b = 10
    }

    // Soma geral
    let temp_geral_b = temp_ideal_b + temp_aceitavel_b + temp_fora_b
    let chuva_geral_b = chuva_ideal_b + chuva_aceitavel_b + chuva_fora_b
    let area_geral_b = area_ideal_b + area_aceitavel_b + area_fora_b


    const pont = document.getElementById("pontuação_b")
    const text = document.getElementById("text")

    const pont_total_b = temp_geral_b + chuva_geral_b + area_geral_b
    pont.innerHTML = pont_total_b

    if(pont_total_b >= 85 && pont_total_b <= 100){
        text.innerText  = "As condições estão ideais, ótimo momento para cultivar."
    }
    else if(pont_total_b  >= 60 && pont_total_b <= 84){
        text.innerText  = "Condições razoáveis, com pequenos ajustes é possível plantar."
    }
    else if(pont_total_b >= 35 && pont_total_b <= 59){
        text.innerText  = "Condições medianas, talvez seja melhor adiar o plantio ou ajustar fatores."
    }
    else {
        text.innerText  = "As condições não são adequadas para essa planta."
    }
      


}
//#endregion

}




//#region Select

// "deseja" é o select, "est" é a estrutura, adicionei um evento no select "change",
// que significa que, quando o select for  alterado nas opições , ele executara a condição.

const deseja = document.getElementById("deseja")

const plantil = document.getElementById("plantil")
const acidez = document.getElementById("acidez")

deseja.addEventListener("change", function () {
  const v = deseja.value;
if (v === "selecionar") {
    plantil.style.display = "none";
    acidez.style.display = "none";
  } 
  else if(v === 'compatibilidade'){
        plantil.style.display = "block";
        acidez.style.display = "none";
  }
  else if(v === 'acidez'){
        plantil.style.display = "none";
        acidez.style.display = "block";
  }
});

//#endregion    

