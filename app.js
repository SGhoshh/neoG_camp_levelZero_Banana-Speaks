var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranlationURL(text){
    return serverUrl + "?" + "text="+ text;
}

function errorHandler(error){
    console.log("error occured",error);
}

function btnclick() {
    var Input= txtInput.value // text in the input text area

    fetch(getTranlationURL(Input))
    .then(response => response.json)
    .then(json => console.log(json.contents.text))
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", btnclick);


