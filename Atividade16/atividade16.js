const cursosFatecSorocaba = [
  {
    nome: "Análise e Desenvolvimento de Sistemas",
    sigla: "ADS",
    periodo: "Noturno",
    descricao:
      "Forma profissionais para projetar, desenvolver e manter sistemas computacionais de informação, com foco em qualidade e produtividade.",
  },
  {
    nome: "Fabricação Mecânica",
    sigla: "FM",
    periodo: "Noturno",
    descricao:
      "Capacita o aluno para atuar na área industrial com foco em processos de fabricação, controle de qualidade, e automação da produção mecânica.",
  },
  {
    nome: "Gestão Empresarial",
    sigla: "GE",
    periodo: "EaD",
    descricao:
      "Voltado à formação de gestores com conhecimentos nas áreas de administração, marketing, finanças e recursos humanos, com aulas a distância.",
  },
  {
    nome: "Logística",
    sigla: "LOG",
    periodo: "Noturno",
    descricao:
      "Prepara o profissional para planejar, operar e controlar a cadeia de suprimentos, armazenamento e distribuição de produtos e serviços.",
  },
  {
    nome: "Manufatura Avançada",
    sigla: "MA",
    periodo: "Integral",
    descricao:
      "Curso inovador voltado à indústria 4.0, com foco em automação, sistemas inteligentes, IoT e integração digital de processos de produção.",
  },
  {
    nome: "Polímeros",
    sigla: "POL",
    periodo: "Matutino",
    descricao:
      "Forma profissionais especializados em materiais poliméricos, processos de transformação, controle de qualidade e desenvolvimento de produtos.",
  },
  {
    nome: "Projetos Mecânicos",
    sigla: "PM",
    periodo: "Matutino",
    descricao:
      "Capacita o aluno para atuar no desenvolvimento de projetos de máquinas e equipamentos mecânicos, com uso de ferramentas CAD/CAE.",
  },
  {
    nome: "Sistemas Biomédicos",
    sigla: "SB",
    periodo: "Matutino",
    descricao:
      "Prepara profissionais para atuar na manutenção, calibração e gestão de equipamentos médico-hospitalares e laboratoriais.",
  },
];

window.onload = (event) => {
  const comboCursos = document.getElementById("lscursos");
  cursosFatecSorocaba.forEach((item) => {
    comboCursos.innerHTML += `<option value='${item.nome}'>${item.nome}</option>`;
  });
};
function confirmaCurso() {
  let cursoValue = document.getElementById("lscursos").value;
  let cursoEscolhido = cursosFatecSorocaba.find(
    (curso) => curso.nome === cursoValue
  );
  let confirmacao = document.getElementById("Confirmacao");
  confirmacao.style = "display: block";
  confirmacao.innerHTML = `<h2>Quer saber mais informções sobre o curso :</h2> 
  <p>${cursoEscolhido.nome}</p> 
  <p>Sigla:${cursoEscolhido.sigla}</p>
  <button onclick="openWindow('${cursoEscolhido.nome}')">Sim</button> 
  <button onclick="closeConfirm()">Não</button>`;
}
function closeConfirm() {
  let confirmacao = document.getElementById("Confirmacao");
  confirmacao.style = "display: none";
}
function openWindow(cursoEscolhido) {
  console.log("to aqyui");
  console.log(cursoEscolhido);
  try {
    console.log("entrei");
    const curso = cursosFatecSorocaba.find(
      (course) => course.nome === cursoEscolhido
    );
    console.log(curso);
    const novaJanela = window.open("", "_blank", "width=600,height=300");
    novaJanela.document.write(`
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${curso.nome}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
              color: #333;
              padding: 20px;
            }
            h1 {
              color: #007bff;
              margin-bottom: 10px;
              font-size: 24px;
            }
            p {
              margin: 5px 0;
            }
            .details {
              background-color: #e7f3ff;
              padding: 10px;
              border-radius: 5px;
              margin-top: 10px;
            }
            .details strong {
              color: #007bff;
            }
          </style>
        </head>
        <body>
          <h1>${curso.nome} (${curso.sigla})</h1>
          <div class="details">
            <p><strong>Período:</strong> ${curso.periodo}</p>
            <p>${curso.descricao}</p>
          </div>
        </body>
      </html>
    `);
    novaJanela.document.close();
  } catch (error) {
    console.log("to aqui no catch" + error);
  }
}
