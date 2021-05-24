var canvas = document.querySelector('canvas');

var c = canvas.getContext("2d");//return context 2d properties basically


//SQUARE
// c.fillRect(x,y,width,height)
c.fillStyle = "#5bc0de";
c.fillRect(100, 20, 100, 100);// for draw rectangle

//LINE
c.beginPath();
// c.moveTo(x,y);
c.moveTo(0,0);//nk set dekat mana. still tak bape paham
c.lineWidth = 0;
// c.lineTo(x,y)
c.lineTo(600, 300);//for each line
c.strokeStyle ="#D9534F";
c.stroke();//to draw the line

//ARC
c.beginPath();
c.lineWidth = 3;
c.arc(150, 70, 50, 0, Math.PI * 2, false);//outline setup
c.stroke();