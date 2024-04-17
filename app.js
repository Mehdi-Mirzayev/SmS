function randomMessage() {
  var messages = ["Birinci SmS Qutusu", "Ikinci SmS Qutusu", " Üçüncü SmS Qutusu"];
  var randomIndex = Math.floor(Math.random() * messages.length);
  var messageBox = document.createElement("div");
  messageBox.textContent = messages[randomIndex];
  messageBox.classList.add("messageBox");
  document.body.appendChild(messageBox);
  setTimeout(function() {
      document.body.removeChild(messageBox);
  }, 2000);
}

document.getElementById("randomButton").addEventListener("click", randomMessage);


