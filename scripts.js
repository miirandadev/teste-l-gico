//1
let indice = 13, soma = 0, k = 0
while (k < indice){
    k++
    soma = soma + k
}
console.log(soma)

//2
let numeros = (n) =>{
    let num = [0,1]
    for (let i= 2; i<=n; i++){
        num[i] = num[i - 1] + num [i - 2]
    }
    return num
}
let res = numeros(10)
console.log(res)

//3
//a
function adiciona(n){

    let adicionado = []
    for(let i = 1; i < n; i= i + 2){
        adicionado.push(i)
    }

    return adicionado
}

let resultado = adiciona(10)
console.log(resultado)

//b
function multiplica(x){
    let multplicado = [2]
    for (let i = 4; i < x; i = i * 2){
        multplicado.push(i)
    }
    return multplicado
}

let resMulti = multiplica(150)
console.log(resMulti)

//c
function quadrado(y) {
    const elevado = []
    for (let i = 0; i < y; i++) {
        elevado.push(i * i)
    }
    return elevado
}

let resElev = quadrado(8)
console.log(resElev)


//d
function quadradoPares(a){
    let elevadoPar = []
    for(let i = 0; i < a; i++){
        if(i % 2 == 0){
            elevadoPar.push(i * i)
        }
    }
    return elevadoPar
}

let resElevPar = quadradoPares(20)
console.log(resElevPar)

//e
function seqFino(b){
    let fin = [0,1]
    for(let i = 2; i < b; i++){
        fin[i] = fin [i - 1] + fin[i - 2]
    }
    return fin
}
let resFin = seqFino(10)
console.log(resFin)

//f
function sequen(){
    let seq = [2]
    let ter = 2
    for (let i = 1; i < 7; i++){
        if( i % 2 === 1){
            ter += 1
        }else{
            ter += 2
        }
        seq.push(ter)
    }
    return seq
}

console.log(sequen())


//4
function descobrirInterruptor() {
    let inter1 = false 
    let inter2 = false 
    let inter3 = false 

    console.log('Ligando o interruptor 1 e desligando depois de alguns minutos')
    console.log('Desligando o interruptor 1 depois de um tempo e ligando o interruptor 2')
    console.log('Indo a uma das salas')

    inter1 = true;
    console.log('O 1 interruptor está apagado mas ainda está quente, então ele controla a sala 1')

    console.log('Indo a outra sala (Segunda ida)')
    if (inter2 === true) {
        console.log('O segundo interruptor está ligado, então controla a sala 2')
    } else {
        if (inter3 === true) {
            console.log('O terceiro interruptor está ligado, então controla a sala 3')
        } else {
            console.log('O interruptor está apagado e frio')
        }
    }

    console.log('Conclusão:')
    console.log('A lâmpada estava apagada e fria, então o interruptor 3 controla a lâmpada da sala 3')
}

descobrirInterruptor()


//5
function inverter(palavra){
    let invertida = ''

    for (let i = palavra.length - 1; i >=0; i--){
        invertida += palavra[i]
    }
    return invertida
}

let string = 'Quero ser estagiário com vocês'
let stringInver = inverter(string)

console.log(stringInver)
console.log(string)