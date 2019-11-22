function CALENDARIO(){blablabla} //la funzione estrai i giorni del mese
//apri jquery onready
$( document ).ready(function(){


    var buttonPiù = $('button.piu') //memorizza il botton in un varr

    $buttonPiu.click(function(){//al click del botton // passa il numero mese

        mese = mese+1 //fa aumentare mese

        if (mese <  11){ //verifica se mese e minore di 11

            $.ajax({//apre la chiamata ajax
                type: "GET",
                url: "urls" + mese,
                success: function (dataRex) {
                    //tutto quello che deve fare  lo metti qui
                    //la funzione calendar che estrae i giorni
                    //manipolazione del dom
                },
                error: function (dataRex) {
                   alert('error')
                }
            })
        }
    })

    var buttonPiù = $('button.meno')
    $buttonMeno.click(function(){})//la stessa funzione ma per il click torna inidetro mese = mese - 1
}) //end here