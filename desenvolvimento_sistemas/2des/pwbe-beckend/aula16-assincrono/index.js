var total = 0;
const mes = [
    {mes: 'Janeiro', aporte: 500, rentabilidade: 0.1},
    {mes: 'Fevereiro', aporte: 300, rentabilidade: 0.3},
    {mes: 'Marco', aporte: 250, rentabilidade: 0.5},
    {mes: 'Abril', aporte: 500, rentabilidade: 0.5},
    {mes: 'Maio', aporte: 500, rentabilidade: 0.1},
    {mes: 'Junho', aporte: 500, rentabilidade: 0.1},
    {mes: 'Julho', aporte: 500, rentabilidade: 0.1},
    {mes: 'Agosto', aporte: 300, rentabilidade: 0.01},
    {mes: 'Setembro', aporte: 500, rentabilidade: 0.1},
    {mes: 'Outubro', aporte: 500, rentabilidade: 0.1},
]


function investiu(mes){
    return new Promise(res => {
        setTimeout(() => {
            total += (Number((mes.rentabilidade * mes.aporte) + mes.aporte));
            console.log(` dinheiro total: ${total}`)
            res();
            }, 2000);
    });
}

function investimento(val) {
  return new Promise(resolve => setTimeout(resolve, val));
}

async function meses(){
    for(let i =0; i < mes.length; i++){
        console.log(`${mes[i].mes} investiu ${mes[i].aporte}` );
        await investiu(mes[i]);
    };
}

meses()