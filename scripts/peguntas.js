const pergunta_html = document.querySelector("h1");
const respostas_html = document.getElementsByClassName("resposta");
const progresso_html = document.querySelector("progress");
let questao_atual = 0;
let respondeu = false;
const lista = [
  { p: "Qual é o pronome pessoal oblíquo átono correspondente à terceira pessoa do singular no caso reto?", r: ['Ele', 'Mim', 'Eu','Ela'], c: 0 },
  { p: "Em qual das seguintes frases o pronome está sendo usado como pronome de tratamento?", r: ['Ela foi ao mercado e comprou os ingredientes.', 'O senhor poderia me ajudar com esta questão?', 'Eles trouxeram os livros para a biblioteca.', 'Eu gostaria de ir ao cinema hoje.'], c: 1 },
  { p: "Qual é o pronome possessivo correspondente à terceira pessoa do singular, feminino, no caso oblíquo?", r: ['Meus', 'Minha', 'Meu', 'Minhas'], c: 3 },
  { p: "Em qual das seguintes opções o pronome relativo está sendo usado de forma correta?", r: ['O menino qual ganhou o prêmio ficou muito feliz.', 'A casa, que foi construída há muitos anos, está precisando de reparos.', 'A pessoa quem encontramos na rua era muito simpática.', 'A rua onde moro é muito movimentada durante o dia.'], c: 1 },
  { p: 'Na frase "Ela disse que aquele livro é dela", qual é a função do pronome "dela"?', r: ['Pronome pessoal', 'Pronome relativo', 'Pronome possessivo', 'Pronome demonstrativo'], c: 2 }
];

const mudar_quiz = (pergunta, respostas, resposta_correta) => {
  // mudar pergunta
  pergunta_html.innerText = pergunta;

  //mudar titulo
  document.querySelector("title").innerText = `pergunta - ${questao_atual+1}`

  // mudar respostas
  for (let index = 0; index < respostas.length; index++) {
    respostas_html[index].innerHTML = respostas[index];
    respostas_html[index].onclick = () => {
      console.log(index, respondeu);
      if (!respondeu) {
        for (const r of respostas_html) {
          if (r == respostas_html[resposta_correta]) {
            r.style.backgroundColor = "Green";
          } else {
            r.style.backgroundColor = "red";
          }
        }
        proxima_pergunta()
        respondeu = true;
      }
    };
  }
};

const aumentar_progresso = () => {
  // progresso_html.value = questao_atual / 5;
};

const proxima_pergunta = () => {
  document.getElementById("controle").style.display = "block";
  document.getElementById("proximo").onclick = () => {
    if(questao_atual == lista.length-1){
      final()
    }

    resetar();
    questao_atual++;
    mudar_quiz(
      lista[questao_atual].p,
      lista[questao_atual].r,
      lista[questao_atual].c
    );
    aumentar_progresso();
    respondeu = false;
  };
};

const resetar = () => {
  for (const r of respostas_html) {
    r.style.backgroundColor = "whitesmoke";
  }
  document.getElementById("controle").style.display = "none";
};

const final = () => {
  window.location.href = 'fim.html'
}

mudar_quiz(
  lista[questao_atual].p,
  lista[questao_atual].r,
  lista[questao_atual].c
);