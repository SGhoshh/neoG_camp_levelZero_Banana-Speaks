var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

function btnclick() {
    txtOutput.innerText = "Translated text will appear here "+txtInput.value;
}
btnTranslate.addEventListener("click", btnclick);