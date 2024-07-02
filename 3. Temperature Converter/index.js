const tempInput = document.getElementById("tempInput");
const toFarenheiht = document.getElementById("toFarenheiht");
const toCelsius = document.getElementById("toCelsius");
const converted = document.getElementById("converted");
let temp;

function convert() {
    if (toCelsius.checked || toFarenheiht.checked){
        if (toFarenheiht.checked) {
            temp = Number(tempInput.value);
            converted.textContent = (temp * (9/5))+32 + "°F";
        }
        else if (toCelsius.checked) {
            temp = Number(tempInput.value);
            converted.textContent = (temp -32)*(5/9) +  "°C";
        }
    }
}