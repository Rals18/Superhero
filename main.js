const { fabric } = require("./fabric");

var canvas=new fabric.Canvas("myCanvas");
var playerX=10;
var playerY=10;
var blockWidth=30;
var blockHeight=30;
var playerObject="";
var blockObject="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    playerObject = Img;
	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(Img);
	});
}

function newImage(getImage)
{
    fabric.Image.fromURL(getImage, function(Img) {
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
        top:playerY,
        left:playerX
        });
        canvas.add(Img);
        });
}