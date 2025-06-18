// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeHeroi = "Bratu"
let xpHeroi = 3934
let nivel

switch (true){
    case (xpHeroi < 1000): {
        nivel = "Ferro"
        console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
        break
    }
    case (xpHeroi >= 1001 && xpHeroi <= 2000): {
        nivel = "Bronze"
        console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
        break
    }
    case (xpHeroi >= 2001 && xpHeroi <= 5000):{
        nivel = "Prata"
        console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
        break
    }
    case (xpHeroi >= 5001 && xpHeroi <= 7000):{
        nivel = "Ouro"
        console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
        break
    }
    case (xpHeroi >= 7001 && xpHeroi <= 8000):{
        nivel = "Platina"
        console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
        break
    }
    case (xpHeroi >= 8001 && xpHeroi <= 9000):{
        nivel = "Ascendente"
        console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
        break
    }
    case (xpHeroi >= 9001 && xpHeroi <= 10000): {
        nivel = "Imortal"
        console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
        break
    }
    case (xpHeroi >= 10001):{
        nivel = "Imortal"
        console.log (`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
        break
    }
    default:
        console.log (`Não foi possível identificar o nível do herói de nome ${nomeHeroi}`)
}
