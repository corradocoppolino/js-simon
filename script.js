$(document).ready(function(){

    reset();

    // ARRAY

    var arrRandom = [];
    var arrUtente = [];

    // VARIABILI

    var counter = 0;

    // START

    $("#btn-start").click(function(){

        $(this).hide();

        while(arrRandom.length < 5){
            arrRandom.push(generatorRandomNumber(1,100));
        }
        console.log(arrRandom);
  
        printOutput(arrRandom.toString(),'#display');

        setTimeout(function(){
            printOutput('Indovina i 5 numeri', '#display');
            $('#btn-box').show();
            $("#restart").hide(); 
        }, 5000);

    })

    $("#btn").click(function(){

        var numero = parseInt($("input").val());
        $("input").val("");
        arrUtente.push(numero);

        console.log(arrUtente);

        if(arrRandom.indexOf(numero) == -1){
            counter += 0;
        }else{
            counter += 1;
        }

        if(arrUtente.length > 4){

            $(this).hide(); 
            $("input").hide();

            printOutput("Calcolo in corso...","#finale");
            //console.log(counter);

            setTimeout(function(){

                if(counter == 0){
                    printOutput("Hai perso, nessun numero indovinato!","#finale");
                }else{
                    printOutput("Hai indovinato " + counter + " numeri","#finale");
                }

                $("#restart").show();
                
                $("#restart").click(function(){

                    location.reload();
            
                })
                
            }, 3000);


        
        }

        //console.log(counter);

    })

})

  // FUNZIONI

  function reset(){
    printOutput("Quando sei pronto, clicca VIA!", "#display");
    $('#btn-start').show();
    $('#btn-box').hide();
  }

  function printOutput(text, target){
      $(target).text(text);
  }

  function generatorRandomNumber(min, max){
    return Math.ceil(Math.random()*(max - min)+min);
   };

