const options = document.querySelectorAll(".switcher__option");
const squares = document.querySelectorAll(".switcher__option-square");
const canvas = document.querySelector(".canvas");

const activeSize = 'active-size';
const activeSquare = 'active-square';

options[0].addEventListener("click", function() {
  options[0].classList.add(activeSize);
  options[1].classList.remove(activeSize);
  options[2].classList.remove(activeSize);
  squares[0].classList.add(activeSquare);
  squares[1].classList.remove(activeSquare);
  squares[2].classList.remove(activeSquare);
  drawCanvas(4);
});

options[1].addEventListener("click", function() {
  options[1].classList.add(activeSize);
  options[0].classList.remove(activeSize);
  options[2].classList.remove(activeSize);
  squares[1].classList.add(activeSquare);
  squares[0].classList.remove(activeSquare);
  squares[2].classList.remove(activeSquare);
  drawCanvas(32);
});

options[2].addEventListener("click", function() {
  options[2].classList.add(activeSize);
  options[0].classList.remove(activeSize);
  options[1].classList.remove(activeSize);
  squares[2].classList.add(activeSquare);
  squares[0].classList.remove(activeSquare);
  squares[1].classList.remove(activeSquare);
  drawCanvas(256);
});

const firstPic = [
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"]
];

secondPic.forEach(row => {
  row.forEach(cell => {
    cell[3] /= 255;
  });
});

function activateFirstImage(ctx, cellWidth, cellHeight) {
  firstPic.forEach((row, idxRow) => {
    row.forEach((cell, idxCol) => {
      ctx.fillStyle = "#" + cell;
      ctx.fillRect(
        cellWidth * idxCol,
        cellHeight * idxRow,
        cellWidth,
        cellHeight
      );
    });
  });
}

function activateSecondImage(ctx, cellWidth, cellHeight) {
  secondPic.forEach((row, idxRow) => {
    row.forEach((cell, idxCol) => {
      ctx.fillStyle = `rgba(${cell})`;
      ctx.fillRect(
        cellWidth * idxCol,
        cellHeight * idxRow,
        cellWidth,
        cellHeight
      );
    });
  });
}

function activateThirdImage(ctx, width, height) {
  let pic = new Image();
  pic.onload = function() {
    ctx.drawImage(pic, 0, 0, width, height);
  };
  pic.src = "./assets/image.png";
}

function drawCanvas(size) {
  canvas.width = 512;
  canvas.height = 512;
  canvas.style.backgroundColor = "white";
  const ctx = canvas.getContext("2d"),
    cellWidth = Math.round(canvas.width / size),
    cellHeight = Math.round(canvas.height / size);

  switch (size) {
    case 4:
      activateFirstImage(ctx, cellWidth, cellHeight);
      break;

    case 32:
      activateSecondImage(ctx, cellWidth, cellHeight);
      break;

    case 256:
      activateThirdImage(ctx, canvas.width, canvas.height); 
      break;
  }
}
