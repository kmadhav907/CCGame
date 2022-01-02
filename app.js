document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  const width = 8;
  const squares = [];
  const candyColors = ['red', 'orange', 'yellow', 'purple', 'green', 'blue'];
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      let randomColor = Math.floor(Math.random() * candyColors.length);
      grid.appendChild(square);
      square.setAttribute('draggable', true);
      square.setAttribute('id', i);
      square.style.backgroundColor = candyColors[randomColor];
      squares.push(square);
      console.log('Div is created');
    }
  }
  createBoard();

  let colorBeingDragged;
  let colorBeingReplaced;
  let squareIDBeingDragged;
  let squareIDBeingReplaced;

  squares.forEach((square) => {
    square.addEventListener('dragstart', dragStart);
  });
  squares.forEach((square) => {
    square.addEventListener('dragend', dragEnd);
  });
  squares.forEach((square) => {
    square.addEventListener('dragover', dragOver);
  });
  squares.forEach((square) => {
    square.addEventListener('dragleave', dragLeave);
  });
  squares.forEach((square) => {
    square.addEventListener('dragenter', dragEnter);
  });
  squares.forEach((square) => {
    square.addEventListener('drop', dragDrop);
  });

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor;
    squareIDBeingDragged = parseInt(this.id);
  }
  function dragEnd() {
    let validMoves = [
      squareIDBeingDragged - 1,
      squareIDBeingDragged - width,
      squareIDBeingDragged + 1,
      squareIDBeingDragged + width
    ];
  }
  function dragOver(e) {
    e.preventDefault();
  }
  function dragLeave() {
    console.log(this.id, 'dragleave');
  }
  function dragEnter(e) {
    e.preventDefault();
  }
  function dragDrop() {
    colorBeingReplaced = this.style.backgroundColor;
    squareIDBeingReplaced = parseInt(this.id);
    this.style.backgroundColor = colorBeingDragged;
    squares[squareIDBeingDragged].style.backgroundColor = colorBeingReplaced;
    console.log(this.id, 'dragdrop');
  }
});
