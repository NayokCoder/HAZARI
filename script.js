document.addEventListener("DOMContentLoaded", function () {
  // Load saved data from localStorage
  loadSavedData();

  document
    .getElementById("calculator-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const players = [
        {
          name: document.getElementById("playerName1").value,
          firstNumber: parseFloat(
            document.getElementById("firstNumber1").value
          ),
          secondNumber: parseFloat(
            document.getElementById("secondNumber1").value
          ),
        },
        {
          name: document.getElementById("playerName2").value,
          firstNumber: parseFloat(
            document.getElementById("firstNumber2").value
          ),
          secondNumber: parseFloat(
            document.getElementById("secondNumber2").value
          ),
        },
        {
          name: document.getElementById("playerName3").value,
          firstNumber: parseFloat(
            document.getElementById("firstNumber3").value
          ),
          secondNumber: parseFloat(
            document.getElementById("secondNumber3").value
          ),
        },
        {
          name: document.getElementById("playerName4").value,
          firstNumber: parseFloat(
            document.getElementById("firstNumber4").value
          ),
          secondNumber: parseFloat(
            document.getElementById("secondNumber4").value
          ),
        },
      ];

      // Save data to localStorage
      saveData(players);

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = players
        .map((player) => {
          const totalPoints = player.firstNumber + player.secondNumber;
          return `${player.name} এর মোট পয়েন্ট: ${totalPoints}`;
        })
        .join("<br>");
    });

  document
    .getElementById("clear-button")
    .addEventListener("click", function () {
      // Clear localStorage
      localStorage.removeItem("players");
      // Clear form fields
      document.getElementById("calculator-form").reset();
      document.getElementById("result").innerHTML = "";
    });
});

function saveData(players) {
  localStorage.setItem("players", JSON.stringify(players));
}

function loadSavedData() {
  const savedData = localStorage.getItem("players");
  if (savedData) {
    const players = JSON.parse(savedData);
    players.forEach((player, index) => {
      document.getElementById(`playerName${index + 1}`).value = player.name;
      document.getElementById(`firstNumber${index + 1}`).value =
        player.firstNumber;
      document.getElementById(`secondNumber${index + 1}`).value =
        player.secondNumber;
    });
  }
}
