var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
//Membuat Segitiga 
c.beginPath(); //Mulai Menggambar
c.moveTo(175, 50); //Titik Awal
c.lineTo(50, 200); //Titik Ke - 2
c.lineTo(300, 200); //Titik ke - 3
c.closePath(); //Titik ke - 3 ke - titik awal
//Membuat garisnya
c.strokeStyle = 'Red';
c.stroke();

//Membuat Persegi
c.strokeRect(100,200,150,150); //Persegi dengan garis outline saja
//c.fillRect(320,200,150,150); //persegi dengan polesan warna

//Membuat Lingkaran
c.beginPath();
//Digambar pada titik (175, 270) dengan ukuran jari jari 50 piksel
//Mulai digambar dari arah jam 3 (0 radian) menuju kembali ke arah jarum jam 3 (2*phi radian)
c.arc(175, 270, 50, 0, Math.PI * 2);
c.fillStyle = 'Green';
c.fill();

//Membuat teks
c.font = "45px arial";
c.fillText("Gambar Diatas Adalah Rumah Burung", 25, 400); //Teks dengan warna

c.font = "30px arial";
c.strokeText("Gambar Dibawah Adalah Hasil render : ", 25, 450); //Teks dengan garis luar saja


function renderImage(){
	//Merender Gambar
	var img = document.getElementById("coding");
	//Render ke canvas
	c.drawImage(img, 50, 500);
}


//Menggambar
var x = 10;
var y = 10;
var rad = 10;
var isClicked = false;

function drawArc(x, y, radius){
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2);
	c.closePath();
	c.fillStyle = 'blue';
	c.fill();
}

document.onmousedown = function(event){
	isClicked = true;
	if (event.target.nodeName.tolowerCase()==='button'){
		c.clearRect(0, 0, 500, 500);
	}
}

document.onmouseup = function(){
	isClicked = false;
}

canvas.onmousemove = function(event){
	x = event.clientX;
	y = event.clientY;
	if (isClicked) {
		drawArc(x,y,rad);
	}
	else{
		return false;
	}
}

//Translasi
window.onload = function(){
	var size = 30;
	drawSquare(0, 0, "gray");
	drawSquare(size, size, "red");
	drawSquare(size, size, "orange");
	drawSquare(size, -size, "blue");
	drawSquare(size, 0, "pink");
	drawSquare(size, -size, "purple");

	function drawSquare(translateH, translateV, color){
		c.fillStyle = color;
		c.translate(translateH, translateV);
		c.fillRect(100, 700, size, size);
	}
}

//Rotasi
//window.onload = function(){
//	var angle = 40;
//	c.fillStyle = "silver";
//	c.fillRect (0, 0, canvas.width, canvas.height);
//	c.translate(canvas.width / 2, canvas.height / 2);
//	drawBezier(angle, "darkturquoise");
//	drawBezier(angle, "deeppink");
//	drawBezier(angle, "gold");
//	drawBezier(angle, "mediumvioletred");
//	drawBezier(angle, "yellow");
//	drawBezier(angle, "teal");
//	drawBezier(angle, "chartreuse");
//	drawBezier(angle, "magenta");
//	drawBezier(angle, "red");
//}
//function drawBezier(angle, color){
//	c.fillStyle = color;
//	c.lineWidth = 7;
//	c.shadowOffsetX = 3;
//	c.shadowOffsetY = 3;
//	c.shadowblur = 5;
//	c.shadowColor = "gray";
//	var XStart = 0;
//	var YStart = 0;
//	var XControl1 = 90;
//	var YControl1 = 20;
//	var XControl2 = -60;
//	var YControl2 = 60;
//	var XEnd = 60;
//	var YEnd = 60;
//	var angleInRadius = angle * Math.PI / 180;
//	c.rotate(angleInRadius);
//	c.beginPath();
//	c.moveTo(XStart, YStart);
//	c.BezierCurveTo(XControl1, YControl1, XControl2, YControl2, XEnd, YEnd);
//	c.fill();
//}