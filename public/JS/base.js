const nome = "Cleodon Bezerra";
let nome2 = "";
let pessoadefault = {
    nome: "Cleodon Bezerra",
    idade: "35",
    trabalho: "Programador"
}

let nomes = ["Cleodon Bezerra", "Dalvirene Bezerra", "Flávia Bezerra"];

let pessoasListaVazia = [];

let pessoas = [

    {
        nome: "Cleodon Bezerra",
        idade: "35",
        trabalho: "Programador"
    },

    {
        nome: "Dalvirene Bezerra",
        idade: "58",
        trabalho: "Pensionista"
    },
    
]

function alterarnome() {
    nome2 = "Dalvirene Bezerra"
    console.log("Valor alterado:")
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("--------IMPRIMIR PESSOAS--------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
       
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Flávia Bezerra",
    idade: "37",
    trabalho: "Nutricionista"
})

imprimirPessoas();

//imprimirPessoa(pessoadefault)

//recebeEalteraNome("Flávia Bezerra");
//recebeEalteraNome("Francisco Júnior")

//alterarnome ();