var canvas=new fabric.Canvas("canvas");
player_y=100;
player_x=100;
block_image_width=10;
block_image_height=10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
    
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    
        });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
    
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);
    
        });
}

window.addEventListener("keydown", f);
function f(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}
if(keyPressed=="38"){
    arriba();
    console.log("arriba")
}
if(keyPressed=="40"){
    abajo();
    console.log("abajo")
}
if(keyPressed=="39"){
    derecha();
    console.log("derecha")
}
if(keyPressed=="37"){
    izquierda();
    console.log("izquierda")
}
}
function arriba(){
    if(player_y>=0){
        player_y = player_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
    }
}
function abajo(){
    if(player_y<=500){
        player_y = player_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
    }
}
function derecha(){
    if(player_x>=0){
        player_x = player_x + block_image_width;
		console.log("altura del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
    }
}
function izquierda(){
    if(player_x<=500){
        player_x = player_x - block_image_width;
		console.log("altura del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
    }
}