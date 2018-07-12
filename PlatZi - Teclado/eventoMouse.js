var cuadrito = document.getElementById("area_de_dibujo");
var papel=cuadrito.getContext("2d");
cuadrito.addEventListener("mousedown", iniciarDibujo);
cuadrito.addEventListener("mouseup", paraDibujo);
var xStart=0;
var yStart=0;


function iniciarDibujo(evento){
	xStart=evento.clientX;
	yStart=evento.clientY;  
    cuadrito.addEventListener("mousemove", dibujar);
}

function dibujar(evento)
{
	dibujarLinea("red",xStart,yStart,evento.clientX,evento.clientY,papel);
	xStart=evento.clientX;
	yStart=evento.clientY;
}
function paraDibujo()
{
	  cuadrito.removeEventListener("mousemove", dibujar);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;  
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}