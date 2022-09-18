 //Fishing Game/Simulator Final Project
 // Setup the Canvas and Graphics Context
 let cnv = document.getElementById('myCanvas');
 let ctx = cnv.getContext('2d');
 cnv.width = 800;
 cnv.height = 500;
 let score = 0;
 function scene(){
   // blue-ish background
   ctx.beginPath();
   ctx.fillStyle = 'lightblue';
   ctx.fillRect(0,0,cnv.width,cnv.height);

   //sun
   ctx.fillStyle = 'yellow';
   ctx.beginPath();
   ctx.arc(60, 45, 30, 0, 2 * Math.PI);
   ctx.fill();

   // Water
   ctx.strokeStyle = 'blue'
   drawRect(0, 700, cnv.width, 700, 600);

   //Man
   // Head
   ctx.strokeStyle = 'black';
   ctx.beginPath();
   ctx.arc(244, 302, 12, 0, 2 * Math.PI);
   ctx.lineWidth=2;
   ctx.stroke();
   // Body
   drawLine(243,315,240,340,2,"black");
   // Arm
   drawLine(243,315,270,325,2,"black");
   // leg 1
   drawLine(240,340,260,355,2,"black");
   // Leg 2
   drawLine(260,355,265,375,2,"black");

   //pier
   ctx.strokeStyle = 'brown';
   drawRect(30,310,30,cnv.height,10);
   drawRect(80,310,80,cnv.height,10);
   drawRect(130,310,130,cnv.height,10);
   drawRect(180,310,180,cnv.height,10)
   drawRect(0,350,250,350,15);
 }

scene();

let yString = 500;
let xString = 300;
function moveString(){
  // fishing line handle
  drawLine(300,355,265,325,6,"gray");
  // String 
  drawLine(xString,yString,300,355,3,"gray");
}

moveString();


//Canvas Draw Functions
function drawRect(x1, y1, x2, y2, w){
  ctx.lineWidth= w;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawFish(x,y,color,r,rSpeed){
  //Triangle part of the fish
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x+20, y-r);
  ctx.lineTo(x+20, y+r);
  ctx.fill();
  //Circle parrt
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function drawLine(x,y,x1,y1,w,color){
  ctx.strokeStyle = color;
  ctx.lineWidth = w;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x1,y1);
  ctx.stroke();
}

function drawCircle(x,y,r,color){
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function fishColor(fishobj){
  for(let i=0;i<50;i++){
    if(fishobj[i].color == 1){
      fishobj[i].color = 'red';
    }else if(fishobj[i].color == 2){
      fishobj[i].color = 'yellow';
    }else if(fishobj[i].color == 3){
      fishobj[i].color = 'orange';
    }else if(fishobj[i].color == 4){
      fishobj[i].color = 'green';
    }else if(fishobj[i].color == 5){
      fishobj[i].color = 'cyan';
    }else if(fishobj[i].color == 6){
      fishobj[i].color = 'black';
    }else if(fishobj[i].color == 7){
      fishobj[i].color = 'white';
    }else if(fishobj[i].color == 8){
      fishobj[i].color = 'pink';
    }else if(fishobj[i].color == 9){
      fishobj[i].color = 'purple';
    }else if(fishobj[i].color == 10){
      fishobj[i].color = 'magenta';
  }
  }
}

function scene(){
  // blue-ish background
  ctx.beginPath();
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(0,0,cnv.width,cnv.height);

  //sun
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(60, 45, 30, 0, 2 * Math.PI);
  ctx.fill();

  // Water
  ctx.strokeStyle = 'blue'
  drawRect(0, 700, cnv.width, 700, 600);

  //Man
  // Head
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.arc(244, 302, 12, 0, 2 * Math.PI);
  ctx.lineWidth=2;
  ctx.stroke();
  // Body
  drawLine(243,315,240,340,2,"black");
  // Arm
  drawLine(243,315,270,325,2,"black");
  // leg 1
  drawLine(240,340,260,355,2,"black");
  // Leg 2
  drawLine(260,355,265,375,2,"black");

  //pier
  ctx.strokeStyle = 'brown';
  drawRect(30,310,30,cnv.height,10);
  drawRect(80,310,80,cnv.height,10);
  drawRect(130,310,130,cnv.height,10);
  drawRect(180,310,180,cnv.height,10)
  drawRect(0,350,250,350,15);

}