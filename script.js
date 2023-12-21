let OptionBtn = document.querySelectorAll(".button-option");
let RestartBtn = document.querySelector(".Restart");
let popup = document.querySelector(".Popup");
let message = document.querySelector(".message");
let newBtn = document.getElementById("New-Game");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let count = 0;

const disableButtons = () => {
  OptionBtn.forEach((element) => {
    element.disabled = true;
    popup.classList.remove("hide");
  });
};

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    message.innerHTML = "&#x1F389; 'X' Wins ";
  } else {
    message.innerHTML = "&#x1F389; 'O' Wins ";
  }
};

const enableButtons = () => {
  OptionBtn.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
};

const newGame = () => {
  popup.classList.add("hide");
  count = 0;
  enableButtons();
};

const drawFunction = () => {
  disableButtons();
  message.innerHTML = "&#x1F60E; It's a draw";
};

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      OptionBtn[i[0]].innerText,
      OptionBtn[i[1]].innerText,
      OptionBtn[i[2]].innerText,
    ];
    if (element1 !== "" && element2 !== "" && element3 !== "") {
      if (element1 === element2 && element2 === element3) {
        winFunction(element1);
      }
    }
  }
};

OptionBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      element.innerHTML = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      element.innerHTML = "O";
      element.disabled = true;
    }

    count += 1;
    if (count === 9) {
      drawFunction();
    }

    winChecker();
  });
});

// const optionDivs = document.querySelectorAll(".button-option");
// const restartBtn = document.querySelector(".Restart");
// const popup = document.querySelector(".Popup");
// const message = document.querySelector(".message");
// const newBtn = document.getElementById("New-Game");

// const winningPattern = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [2, 5, 8],
//   [6, 7, 8],
//   [3, 4, 5],
//   [1, 4, 7],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// let xTurn = true;
// let count = 0;

// const disableDivs = () => {
//   optionDivs.forEach((div) => {
//     div.removeEventListener("click", clickHandler);
//     popup.classList.remove("hide");
//   });
// };

// const winFunction = (letter) => {
//   disableDivs();
//   const winMessage = letter === "X" ? "&#x1F389; 'X' Wins" : "&#x1F389; 'O' Wins";
//   message.innerHTML = winMessage;
// };

// const enableDivs = () => {
//   optionDivs.forEach((div) => {
//     div.innerText = "";
//     div.addEventListener("click", clickHandler);
//   });
// };

// const newGame = () => {
//   popup.classList.add("hide");
//   count = 0;
//   enableDivs();
// };

// const drawFunction = () => {
//   disableDivs();
//   message.innerHTML = "&#x1F60E; It's a draw";
// };

// const winChecker = () => {
//   for (const pattern of winningPattern) {
//     const [element1, element2, element3] = pattern.map((index) => optionDivs[index].innerText);
//     if (element1 !== "" && element2 !== "" && element3 !== "" && element1 === element2 && element2 === element3) {
//       winFunction(element1);
//     }
//   }
// };

// const clickHandler = (event) => {
//   const div = event.currentTarget;
//   if (!div.classList.contains("clicked")) {
//     xTurn ? (xTurn = false) : (xTurn = true);
//     div.innerHTML = xTurn ? "O" : "X";
//     div.classList.add("clicked");

//     count += 1;
//     if (count === 9) {
//       drawFunction();
//     }

//     winChecker();
//   }
// };

// enableDivs();
