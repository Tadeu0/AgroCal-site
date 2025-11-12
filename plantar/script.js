//#region Compatibilidade
function varidar() {
    const selectplantas = document.getElementById("plantas").value
    const selectsolo = document.getElementById("solo").value
    const chuva = document.getElementById("chuva").value
    const temperatura = document.getElementById("temperatura").value
    const area = document.getElementById("area").value

    var hortalicas =
        [
            {
                'id': 0,
                'nome': 'tomate',
                'temp_min_ideal': 24,
                'temp_max_ideal': 28,
                'temp_min_aceitavel': 20,
                'temp_max_aceitavel': 30,
                'chuva_min_ideal': 0,
                'chuva_max_ideal': 0,
                'chuva_min_aceitavel': 0,
                'chuva_max_aceitavel': 0,
                'area_ideal': 0,
                'area_aceitavel': 0,
                'area_fora': 0,
                'compatibilidade_solo': 'argiloso'
            }, {
                'id': 1,
                'nome': 'alface',
                'temp_min_ideal': 12,
                'temp_max_ideal': 25,
                'temp_min_aceitavel': 5,
                'temp_max_aceitavel': 36,
                'chuva_min_ideal': 0,
                'chuva_max_ideal': 0,
                'chuva_min_aceitavel': 0,
                'chuva_max_aceitavel': 0,
                'area_ideal': 0,
                'area_aceitavel': 0,
                'area_fora': 0,
                'compatibilidade_solo': 'misto'
            }
        ]

    for (let i = 0; i < hortalicas.length; i++) {
        if (hortalicas[i].nome === selectplantas) {
            console.log(hortalicas[i].nome)
            calcular(i)
        }
    }

    //#region  Calculo
    function calcular(i) {

        if (selectplantas === "selecionar") {
            alert("Selecione um campo de plantil")
        }
        if (selectsolo === "selecionar") {
            alert("Selecione um campo do tipo de solo")
        }
        if (selectplantas === hortalicas[i].nome 
            && selectsolo !== hortalicas[i].compatibilidade_solo) {
            alert("escolha outro tipo de solo")
        }

        else if (selectplantas === hortalicas[i].nome 
            && selectsolo === hortalicas[i].compatibilidade_solo) {
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
            if (Number(temperatura) >= hortalicas[i].temp_min_ideal &&
                Number(temperatura) <= hortalicas[i].temp_max_ideal) {

                temp_ideal = 40 // pontuação
            }
            else if (Number(temperatura) >= hortalicas[i].temp_min_aceitavel
                && Number(temperatura) <= hortalicas[i].temp_max_aceitavel) {
                temp_aceitavel = 25
            }
            else {
                temp_fora = 10
            }

            // área 
            if (Number(area) >= 50) {
                area_ideal = 10
            }
            else if (Number(area) >= 30 && Number(area) <= 49) {
                area_aceitavel = 5
            }
            else {
                area_fora = 2
            }



            // Chuva
            if (Number(chuva) >= hortalicas[i].chuva_min_ideal
                && Number(chuva) <= hortalicas[i].chuva_max_ideal) {
                chuva_ideal = 30
            }
            else if (Number(chuva) >= hortalicas[i].chuva_min_aceitavel
                && Number(chuva) <= hortalicas[i].chuva_max_aceitavel) {
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

            if (pont_total >= 85 && pont_total <= 100) {
                text.innerText = "As condições estão ideais, ótimo momento para cultivar."
            }
            else if (pont_total >= 60 && pont_total <= 84) {
                text.innerText = "Condições razoáveis, com pequenos ajustes é possível plantar."
            }
            else if (pont_total >= 35 && pont_total <= 59) {
                text.innerText = "Condições medianas, talvez seja melhor adiar o plantio ou ajustar fatores."
            }
            else {
                text.innerText = "As condições não são adequadas para essa planta."
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
                'ph_max_aceidavel': 7,    
                'ph_alto': 7.5,
                'ph_baixo': 5.5,
                'ph_pontuacao_boa': 40,    
                 'ph_pontuacao_media': 20,    
                 'ph_pontuacao_inadequada': 5,    
                'solo': 'misto'

        },
        {
                'id': 0,
                'nome': 'batata',
                'ph_min_aceidavel': 6,
                'ph_max_aceidavel': 7,    
                'ph_alto': 7.5,
                'ph_baixo': 5.5,
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


    function v(p){
        
        if (selectplanta_ph === "selecionar") {
            alert("Selecione um campo de plantil")
        }
        if (selectsolo_ph === "selecionar") {
            alert("Selecione um campo do tipo de solo")
        }
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
        }

    }

}
//#endregion