//Named Exports
export let cores = [];
export function getName(){};
export class Animais {};

//Lista de exportação
//Se for exportar um grupo como no exemplo abaixo, não é necessário usar o export como no exemplo acima.
export {cores, getName, Animais}

//strict mode > como ficam todos os exports

//export default só pode ter um por arquivo, é uma regra!
export default getCar() {

}
