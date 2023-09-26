const calcularMedia = (notas) => {
    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    const media = soma / notas.length;
    return media;
};

const aprovacao = (notas) => {
    const media = calcularMedia( notas );
    const condicao = media >= 6 ? "Aprovado" : "Reprovado";
    return `Média: ${media} - Resultado: ${condicao}`;
}

// Função Recursivas
const contagemRegressiva = (numero) =>{
    console.log(numero)
    const proximoNumero = numero - 1;
    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

/* 
 * Formulário envio de dados para cálculo da média 
 */

// Melhoria nos seletores de document.getAnimations para document.querySelector fica melhor para identificar ID com #.
const formulario1 = document.querySelector('#formulario-01');
if(formulario1)
    formulario1.addEventListener('submit', function( evento ){
        evento.preventDefault();
        evento.stopPropagation();
         if( this.getAttribute('class') && this.getAttribute('class').match(/erro/)) {
             return false;
         }    
        let dados = new FormData(this);
        let notas = [];
        for(let key of dados.keys()) {
            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número
            if(!isNaN(numero)) {
                notas.push(numero);
            }
        }
        console.log(notas);
        texto = aprovacao(notas)
        document.querySelector('#resultado').innerHTML = texto;
    });

const validaCampo = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        if(this.value === ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
};

const validaCampoNumerico = (elemento) =>{
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 
        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
};


const validaEmail = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
};

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}