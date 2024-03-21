//https://teachablemachine.withgoogle.com/models/rNZUdDV_V/

function iniciar(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = mlr.soudCLassifier('https://teachablemachine.withgoogle.com/models/rNZUdDV_V/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);

    }else{
        console.log(results);

        if (results[0].labels == "cachorro caramelo") {
            document.getElementById("result").innerHTML = results[0];
            
        }else if (results[0].labels == "gatu") {
            document.getElementById("result").innerHTML = results[0];
            
        }else if (results[0].labelss == "sapo") {
            document.getElementById("result").innerHTML = results[0];
            
        }else document.getElementById("result").innerHTML = "Som de fundo";
    }
}
