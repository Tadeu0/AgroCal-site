//#region Compatibilidade
function varidar() {
    const selectplantas = document.getElementById("plantas").value
    const selectsolo = document.getElementById("solo").value
    const chuva = document.getElementById("chuva").value
    const temperatura = document.getElementById("temperatura").value
    const area = document.getElementById("area").value
    const pont = document.getElementById("pontuacao")
    const texto = document.getElementById("texto")

    var hortalicas =
        [
            {
                'id': 0,
                'nome': 'tomate',
                'temp_min_ideal': 18,
                'temp_max_ideal': 27,
                'temp_baixa': 10,
                'temp_alta': 30,
                'chuva_min_ideal': 20,
                'chuva_max_ideal': 40,
                'chuva_baixa': 10,
                'chuva_alta': 30,
                'compatibilidade_solo': 'argiloso'
            }, 
                {
                'id': 1,
                'nome': 'milho',
                'temp_min_ideal': 18,
                'temp_max_ideal': 27,
                'temp_baixa': 10,
                'temp_alta': 30,
                'chuva_min_ideal': 20,
                'chuva_max_ideal': 40,
                'chuva_baixa': 10,
                'chuva_alta': 30,
                'compatibilidade_solo': 'aneroso'
            }, 
                {
                'id': 2,
                'nome': 'alface',
                'temp_min_ideal': 18,
                'temp_max_ideal': 27,
                'temp_baixa': 10,
                'temp_alta': 30,
                'chuva_min_ideal': 20,
                'chuva_max_ideal': 40,
                'chuva_baixa': 10,
                'chuva_alta': 30,
                'compatibilidade_solo': 'misto'
            }, 
                {
                'id': 3,
                'nome': 'batata',
                'temp_min_ideal': 18,
                'temp_max_ideal': 27,
                'temp_baixa': 10,
                'temp_alta': 30,
                'chuva_min_ideal': 20,
                'chuva_max_ideal': 40,
                'chuva_baixa': 10,
                'chuva_alta': 30,
                'compatibilidade_solo': 'argiloso'
            }, 
        ]

    for (let i = 0; i < hortalicas.length; i++) {
        if (hortalicas[i].nome === selectplantas) {
            console.log(hortalicas[i].nome)
            calcular(i)
        }
    }

    //#region  Calculo
    if (selectplantas === "selecionar") {
        alert("Selecione um campo de plantil")
    }
    if (selectsolo === "selecionar") {
        alert("Selecione um campo do tipo de solo")
    }
    function calcular(i) {

        if (selectplantas === hortalicas[i].nome 
            && selectsolo !== hortalicas[i].compatibilidade_solo) {
            alert("escolha outro tipo de solo")
        }

        else if (selectplantas === hortalicas[i].nome 
            && selectsolo === hortalicas[i].compatibilidade_solo) {

                let pontuacao_temp_boa = 0
                let pontuacao_temp_medio = 0
                let pontuacao_temp_ruim = 0


            // Temperatura
            if (Number(temperatura) >= hortalicas[i].temp_min_ideal &&
                Number(temperatura) <= hortalicas[i].temp_max_ideal) {

                pontuacao_temp_boa = 40
            }
            else if (Number(temperatura) >= hortalicas[i].temp_alta) {
                pontuacao_temp_medio = 20
            }
            else {
                pontuacao_temp_ruim = 5
            }

                let pontuacao_chuva_boa = 0
                let pontuacao_chuva_medio = 0
                let pontuacao_chuva_ruim = 0

            // Chuva
            if (Number(chuva) >= hortalicas[i].chuva_min_ideal
                && Number(chuva) <= hortalicas[i].chuva_max_ideal) {
                pontuacao_chuva_boa = 30
            }
            else if (Number(chuva) >= hortalicas[i].chuva_alta) {
                pontuacao_chuva_medio = 15
            }
            else {
                pontuacao_chuva_ruim = 5
            }

            // Soma geral

            pont_temp_geral = pontuacao_temp_boa + pontuacao_temp_medio + pontuacao_temp_ruim
            pont_chuva_geral = pontuacao_chuva_boa + pontuacao_chuva_medio + pontuacao_chuva_ruim
            const pont_total = pont_temp_geral + pont_chuva_geral

            
            pont.innerHTML = pont_total + " /100"

            if (Number(pont_total) >= 85 && Number(pont_total) <= 100) {
                texto.innerHTML = "As condições estão ideais, ótimo momento para cultivar."
            }
            else if (Number(pont_total) >= 60 && Number(pont_total) <= 84) {
                texto.innerHTML = "Condições razoáveis, com pequenos ajustes é possível plantar."
            }
            else if (Number(pont_total) >= 35 && Number(pont_total) <= 59) {
                texto.innerHTML = "Condições medianas, talvez seja melhor adiar o plantio ou ajustar fatores."
            }
            else {
                texto.innerHTML = "As condições não são adequadas para essa planta."
            }



        }
    }

    //#endregion
}
//#endregion




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
    else if (v === 'compatibilidade') {
        plantil.style.display = "block";
        acidez.style.display = "none";
    }
    else if (v === 'acidez') {
        plantil.style.display = "none";
        acidez.style.display = "block";
    }
});

//#endregion    








//#region Ácidez

function ph(){
    const selectplanta_ph = document.getElementById("plantas_ph").value
    const selectsolo_ph = document.getElementById("solo_ph").value 
    const ph = document.getElementById("ph").value


    let list_ph = 
    [
        {
                'id': 0,
                'nome': 'tomate',
                'ph_min_aceidavel': 6,
                'ph_max_aceidavel': 6.8,    
                'ph_alto': 7.5,
                'ph_baixo': 5.5,
                'ph_pontuacao_boa': 40,    
                'ph_pontuacao_media': 20,    
                'ph_pontuacao_inadequada': 5,    
                'solo': 'argiloso'

        },
        {
                'id': 0,
                'nome': 'milho',
                'ph_min_aceidavel': 6,
                'ph_max_aceidavel': 7,    
                'ph_alto': 7.5,
                'ph_baixo': 5.5,
                'ph_pontuacao_boa': 40,    
                 'ph_pontuacao_media': 20,    
                 'ph_pontuacao_inadequada': 5,    
                'solo': 'arenoso'

        },
        {
                'id': 0,
                'nome': 'alface',
                'ph_min_aceidavel': 6,
                'ph_max_aceidavel': 6.8,    
                'ph_alto': 8,
                'ph_baixo': 5.5,
                'ph_pontuacao_boa': 40,    
                 'ph_pontuacao_media': 20,    
                 'ph_pontuacao_inadequada': 5,    
                'solo': 'misto'

        },
        {
                'id': 0,
                'nome': 'batata',
                'ph_min_aceidavel': 5,
                'ph_max_aceidavel': 6,    
                'ph_alto': 6.2,
                'ph_baixo': 4.8,
                'ph_pontuacao_boa': 40,    
                 'ph_pontuacao_media': 20,    
                 'ph_pontuacao_inadequada': 5,    
                'solo': 'arenoso'

        },
    ]

// for pecorre a lista list_ph

    for( let p = 0; p < list_ph.length; p++){
        if(list_ph[p].nome === selectplanta_ph){
            v(p)
        }
    }


    if (selectplanta_ph === "selecionar") {
        alert("Selecione um campo de plantil")
    }
    if (selectsolo_ph === "selecionar") {
        alert("Selecione um campo do tipo de solo")
    }
    function v(p){
        
        if( selectplanta_ph === list_ph[p].nome 
            && selectsolo_ph !== list_ph[p].solo){
            alert("Escole outro tipo de solo")
            
        }

        else if(selectplanta_ph === list_ph[p].nome && selectsolo_ph === list_ph[p].solo){

            

            
            if(Number(ph) >= list_ph[p].ph_min_aceidavel &&
                Number(ph) <= list_ph[p].ph_max_aceidavel ){
                    list_ph[p].ph_pontuacao_boa 
                }
            if(Number(ph) >= list_ph[p].ph_alto ){
                    list_ph[p].ph_pontuacao_boa
                }
                else if( Number(ph) <= list_ph[p].ph_baixo){
                    list_ph[p].ph_pontuacao_inadequada
                }
                alert()
        }

    }

}
//#endregion