const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const btcValue = 0.0000030
const dolarValue = 5.2
const euroValue = 5.9

const convertValue = () => {

    const inputReal = document.getElementById("input-real").value
    const valueTextReal = document.getElementById("value-text-real")
    const currencyValueText = document.getElementById("currency-text-real")

    valueTextReal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal);


    if (select.value === "US$ Dolar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReal / dolarValue);
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReal / euroValue);
    }

    if(select.value === "Bitcoin"){
        currencyValueText.innerHTML = inputReal*btcValue
    }
}

currencySelect = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Design sem nome 1.png"
    }

    if (select.value === "US$ Dolar americano") {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if(select.value === "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/btc-img.png"
    }
}

button.addEventListener('click', convertValue)
select.addEventListener("change", currencySelect)