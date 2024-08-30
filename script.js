document.addEventListener('DOMContentLoaded', function() {
  var welcomeScreen = document.getElementById("welcome-screen");
  var startButton = document.getElementById("start-game-button");
  var welcomeCoin = document.querySelector(".welcome-coin"); // Seleciona a imagem da moeda

  startButton.addEventListener("click", function() {
    welcomeScreen.style.display = "none";
    startGame();
  });

  setTimeout(function() {
    welcomeCoin.style.opacity = 1;
  }, 100); // Atraso de 100ms para garantir que o carregamento da página tenha ocorrido

  updateThemeIcon();
});

function flipCoin() {
  var resultElement = document.getElementById("result");
  var coinElement = document.getElementById("coin-container");

  var random = Math.random();
  var result = random < 0.5 ? "Cara" : "Coroa";

  coinElement.classList.add("flip-animation");

  setTimeout(function() {
    resultElement.textContent = "Resultado: " + result;
    resultElement.classList.add("fade-in");
  }, 500);

  setTimeout(function() {
    coinElement.classList.remove("flip-animation");
    resultElement.classList.remove("fade-in");
  }, 1500);
}

function toggleTheme() {
  var body = document.body;
  var themeIcon = document.getElementById("theme-icon");

  console.log("Antes da mudança de tema:", body.classList);

  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeIcon.className = "fas fa-moon"; // Ícone da lua
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeIcon.className = "fas fa-sun"; // Ícone do sol
  }
  
  console.log("Depois da mudança de tema:", body.classList);
}

document.addEventListener('DOMContentLoaded', function() {
  var coinElement = document.getElementById("coin");

  coinElement.addEventListener("click", function() {
    flipCoin();
  });

  updateThemeIcon();
});
