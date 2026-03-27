function toggleChat() {
  let chat = document.getElementById("chat");
  chat.style.display = chat.style.display === "none" ? "block" : "none";
}

function responder() {
  let input = document.getElementById("msg");
  let msg = input.value.toLowerCase();
  let resposta = "Não entendi 😅";

  if (msg.includes("oi")) resposta = "Olá! 👋";
  if (msg.includes("site")) resposta = "Este site conta palavras!";
  if (msg.includes("como usar")) resposta = "Digite no campo e veja!";
  if (msg.includes("criador")) resposta = "Foi criado por você 😎";

  let chat = document.getElementById("messages");

  chat.innerHTML += "<p><b>Você:</b> " + input.value + "</p>";
  chat.innerHTML += "<p><b>Bot:</b> " + resposta + "</p>";

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
