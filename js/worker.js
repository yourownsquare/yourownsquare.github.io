let dimensions =[5,10,15,20,25,30,35,40,45,50,55,60,65]

function generateSquares(numSquares) {
  const squaresData = [];

  for (let i = 0; i < numSquares; i++) {
      const size = dimensions[Math.floor(Math.random()*dimensions.length)];
      const color = getRandomColor();

      squaresData.push({ size, color });
  }

  postMessage(squaresData);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;}

self.addEventListener('message', function (event) {
  generateSquares(event.data);
});
