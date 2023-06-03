var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranlationURL(text){
    return serverUrl + "?" + "text="+ text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something went wrong, try again later");
}

function btnclick() {
    var Input= txtInput.value // text in the input text area

    fetch(getTranlationURL(Input))
    .then(response => response.json()) /*.then takes the return value of the previous function (here the server response to fetch) as parameter and then returns a new value(here response.json) to the next .then */
    .then(json => txtOutput.innerText = json.contents.translated)
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", btnclick);


