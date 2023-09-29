import months from './months.js';

// Filtra meses
const filteredMonths = months.filter( (months) => months.days === 31);

console.log(filteredMonths);

let toPrint = '';

// Lista meses
filteredMonths.forEach(month => {
  toPrint += month.month + ', ';
});

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
  return{days: prev.days + next.days};
});

//Map
let cachorros = [10, 15, 7, 8, 9];


let years = cachorros.map( (cachorro => {
  return cachorro * 7;

}));



document.querySelector('#main').innerHTML = toPrint + '<br> Soma dos dias dos meses selecionados: ' + sumMonthDays.days + '<br> idade humana dos cachorros' + years + ' ';