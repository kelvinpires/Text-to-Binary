const form = document.querySelector("form");
const toConvertText = document.querySelector("#toConvert");
const converted = document.querySelector("#converted");

form.addEventListener("submit", textToBinary)


function textToBinary(e) {
    e.preventDefault();
    const text = toConvertText.value;

    const arr = text.split("")

    const letterCode = arr.map(item => item.charCodeAt());

    const binary = letterCode.map(item => item.toString(2));
    const textConverted = binary.join(" ");

    converted.textContent = textConverted;
    console.log(arr);
}