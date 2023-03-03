//BURGUER MENU
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');


function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

burger.addEventListener('click', function () {
    toggleNav();
});



//CURRENCY CONVERTER
//Referencia DOM de los botones de las monedas
const yen = document.getElementById('yen');
const usd = document.getElementById('usd');
const eur = document.getElementById('eur');

//Eventos click en cada boton que llaman a la funcion currencyApi con la referencia en la API de cada moneda.
yen.addEventListener('click', function () {
    currencyApi('jpy')
});

usd.addEventListener('click', function () {
    currencyApi('usd')
});
eur.addEventListener('click', function () {
    currencyApi('eur');
});

///Funcion asincrona que hace un GET en la API
//Recoge el valor de la moneda que pasamos por parametro, respecto al dolar
//Llamada a la accion de la funcion changePrice con los parametros de la moneda seleccionada y el valor de cambio.
async function currencyApi(currency) {
    try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${currency}.json`);
        if (response.ok) {
            let result = await response.json();
            changePrice(result[currency], currency)
        }
    } catch (error) {
        console.log(error)
    }
}

//Función que añade mediante el DOM los distintos cambios de valores segun la moneda y tambien cambia el estilo para la que esta seleccionada
function changePrice(currentValue, currentCurrency) {
    if (currentCurrency === 'eur') {
        document.getElementById("basic-price").innerHTML = `€0`;
        document.getElementById("profesional-price").innerHTML = `€${Math.round(currentValue * 25)}`;
        document.getElementById("premium-price").innerHTML = `€${Math.round(currentValue * 60)}`;
        
        eur.classList.add("button-active");
        yen.classList.remove("button-active");
        usd.classList.remove("button-active");

    } else if (currentCurrency === 'jpy') {
        document.getElementById("basic-price").innerHTML = `¥0`;
        document.getElementById("profesional-price").innerHTML = `¥${Math.round(currentValue * 25)}`;
        document.getElementById("premium-price").innerHTML = `¥${Math.round(currentValue * 60)}`;

        eur.classList.remove("button-active");
        yen.classList.add("button-active");
        usd.classList.remove("button-active");
    }
    else {
        document.getElementById("basic-price").innerHTML = "$0";
        document.getElementById("profesional-price").innerHTML = "$25";
        document.getElementById("premium-price").innerHTML = "$60";

        eur.classList.remove("button-active");
        yen.classList.remove("button-active");
        usd.classList.add("button-active");
    }
}









