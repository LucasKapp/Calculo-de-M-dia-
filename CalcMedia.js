function mediaAlunos (v1,v2,v3,v4,v5,v6){
    return (v1 + v2 + v3 + v4 + v5) / (v6)
}
function aluno (nome){
    return "Média do aluno " + nome
}
   
let algumAluno = aluno ("Lucas: ")

let somamulti = mediaAlunos (6,6,7,8,10,5)
        console.log (algumAluno + somamulti)
