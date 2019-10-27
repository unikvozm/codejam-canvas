var options = document.querySelectorAll(".switcher__option");
var squares = document.querySelectorAll(".switcher__option-square");

options[0].addEventListener("click", function() {
  options[0].classList.add("active-div");
  options[1].classList.remove("active-div");
  options[2].classList.remove("active-div");
  squares[0].classList.add("active-square");
  squares[1].classList.remove("active-square");
  squares[2].classList.remove("active-square");
  drawCanvas(4);
});

options[1].addEventListener("click", function() {
  options[1].classList.add("active-div");
  options[0].classList.remove("active-div");
  options[2].classList.remove("active-div");
  squares[1].classList.add("active-square");
  squares[0].classList.remove("active-square");
  squares[2].classList.remove("active-square");
  drawCanvas(32);
});

options[2].addEventListener("click", function() {
  options[2].classList.add("active-div");
  options[0].classList.remove("active-div");
  options[1].classList.remove("active-div");
  squares[2].classList.add("active-square");
  squares[0].classList.remove("active-square");
  squares[1].classList.remove("active-square");
  drawCanvas(256);
});

const firstPic = [
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"]
];

function drawCanvas(size) {
  var canvas = document.querySelector(".canvas");
  canvas.width = 512;
  canvas.height = 512;
  canvas.style.backgroundColor = "white";
  var ctx = canvas.getContext("2d"),
    cellWidth = Math.round(canvas.width / size),
    cellHeight = Math.round(canvas.height / size);

  switch (size) {
    case 4:
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
      break;

    case 256:
      var pic = new Image();
      pic.onload = function() {
        ctx.drawImage(pic, 0, 0, canvas.width, canvas.height);
      };
      pic.src = "./assets/image.png";
      break;
  }
}
