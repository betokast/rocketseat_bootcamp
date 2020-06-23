const nome = "Marcelo";
const sexo = "M";
const idade = 65;
const contribuicao = 35;

if (sexo === "F") {
    if(idade + contribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}

if (sexo === "M") {
    if(idade + contribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}

