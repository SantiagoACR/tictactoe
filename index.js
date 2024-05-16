const spaces = document.querySelectorAll(".space");

let player = "X";

let xowinner = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

const printplayer = (nSpace) => {
  if (isEmpty(nSpace)) {
    spaces[nSpace].innerHTML = player;
    player = player == "X" ? "O" : "X";
  } else {
    alert("Espacio Ocupado");
  }
};

const isEmpty = (nS) => {
  if (spaces[nS].innerHTML == "") {
    return true;
  } else {
    return false;
  }
};

spaces.forEach((space) => {
  space.addEventListener("click", () => {
    printplayer(parseInt(space.id) - 1);
  });
});
