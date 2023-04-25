const mesEl = document.querySelector(".data h1");
const dataCompletaEl = document.querySelector(".data p");
const datasEl = document.querySelector(".datas");

const indiceMes = new Date().getMonth();
const ultimaData = new Date(new Date().getFullYear(), indiceMes+1, 0).getDate();
const primeiraData = new Date(new Date().getFullYear(), indiceMes, 1).getDay();

const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

mesEl.innerText = meses[indiceMes];

const novaData = new Date();

dataCompletaEl.innerText = dias[novaData.getDay()] + ", " + novaData.getDate() + " " + meses[novaData.getMonth()] + " " + novaData.getFullYear(); 

let datas="";

for(i=primeiraData; i>0; i--){
    datas += `<div class="vazio"></div>`;
}

for(i=1; i<=ultimaData; i++){
    if(i === new Date().getDate()){
        datas += `<div class="hoje">${i}</div>`;
    }else{
        datas += `<div>${i}</div>`;
    }
}

datasEl.innerHTML = datas;