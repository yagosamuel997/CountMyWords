const respostas = [
  { pergunta: ["oi", "olá"], resposta: "Olá! 👋 Como posso te ajudar?" },
  { pergunta: ["site"], resposta: "Este site conta palavras e caracteres em tempo real." },
  { pergunta: ["como usar"], resposta: "Digite seu texto e veja o resultado automaticamente." },
  { pergunta: ["erro", "bug"], resposta: "Tente atualizar a página ou limpar o campo." },
  { pergunta: ["criador"], resposta: "O site foi criado por um desenvolvedor iniciante 😎" }
];

function toggleChat() {
  let chat = document.getElementById("chat");
  chat.style.display = chat.style.display === "none" ? "block" : "none";
}

function responder() {
  let input = document.getElementById("msg");
  let texto = input.value.toLowerCase();
  let resposta = "Não entendi 🤖";

  for (let item of respostas) {
    for (let palavra of item.pergunta) {
      if (texto.includes(palavra)) {
        resposta = item.resposta;
      }
    }
  }

  let chat = document.getElementById("messages");

  chat.innerHTML += `<p><b>Você:</b> ${input.value}</p>`;
  chat.innerHTML += `<p><b>IA:</b> ${resposta}</p>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
