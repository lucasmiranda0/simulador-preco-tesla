const simula = document.getElementById("simula");
var contador = 0;
var valorMotor = 0;
var valorPintura = 0;
var valorAro = 0;
var valorInterior = 0;
var valorPaa = 0;
var dist = 0;
var vm = 0;
var klmh = 0;

function motor(campo) {    
    if (campo == 1) {
        valorMotor = 33190;
        dist = 448;
        vm = 225;
        klmh = 5.6;
    } else if (campo == 2) {
        valorMotor = 42190;
        dist = 580;
        vm = 233;
        klmh = 4.4;
    } else if (campo == 3) {
        valorMotor = 51190;
        dist = 567;
        vm = 261;
        klmh = 3.3;
    } else {
        valorMotor = 0;
        dist = 0;
        vm = 0;
        klmh = 0;
    }        
}

function pintura(campo) {
    if (campo == 1) {
        valorPintura = 0;
    } else if (campo == 2) {
        valorPintura = 1000;
    } else if (campo == 3) {
        valorPintura = 1000;            
    } else if (campo == 4) {
        valorPintura = 1000;
    } else if (campo == 5) {
        valorPintura = 2000;
    } else {
        valorPintura = 0;
    }    
}

function aro(campo) {
    if (campo == 1) {
        valorAro = 0;    
    } else {
        valorAro = 0;
    }    
}

function interior(campo) {
    if (campo == 1) {
        valorInterior = 0;
    } else if (campo == 2) {
        valorInterior = 1000;    
    } else {
        valorInterior = 0;
    }    
}

function paa(campo) {
    if (campo == 1) {
        valorPaa = 0;
    } else if (campo == 2) {
        valorPaa = 10000;
    } else {
        valorPaa = 0;
    }
}

function get() {
    let request = new XMLHttpRequest()
    request.open("GET", "https://economia.awesomeapi.com.br/last/USD-BRL", false)    
    request.send()    
    return request.responseText    
}

simula.addEventListener("click", () => {
    let xmldolar = get();
    let dolar = JSON.parse(xmldolar);
    contador = valorMotor + valorPintura + valorAro + valorInterior + valorPaa;
    preco.innerText= "Preço: " + Math.trunc(contador * dolar.USDBRL.bid) + "R$";
    autonomia.innerText = "Autonomia: " + dist;
    velocidade.innerText = "Velocidade máxima: " + vm;
    kmh.innerText = "0-100 em " + klmh + " segundos";    
});