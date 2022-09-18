//Global variables
let mouseX;
let mouseY;
let fishCaught = [];
let rockCaught = [];
let bubblesCaught = [];
let reelAnimation = false;

//Mouse movement listener
document.getElementById('myCanvas').addEventListener('mousedown', mousemoveHandler);

//Mouse movement function
function mousemoveHandler(event){
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log('x:' + mouseX + " y: "+ mouseY);
  xString = mouseX;
  yString = mouseY;
}

function clickFish(){
  console.log('x: ' + mouseX + ' y: ' + mouseY);
  for (let i=0;i<fish.length;i++){
    
    if (mouseX > fish[i].x-fish[i].r && mouseX < 20+fish[i].x && mouseY > fish[i].y-fish[i].r && mouseY < fish[i].y+fish[i].r ){
      reelAnimation = true;
      fishCaught.push(fish[i]);
      fish.splice(i,1);
      score += 1;
      
      if (score >= 15){
        alert('You Won');
        score = 0;
      }
    }
  }
  
  for (let i=0;i<rock.length;i++){
    if (mouseX > rock[i].x-rock[i].r && mouseX < rock[i].r+rock[i].x && mouseY >rock[i].y-rock[i].r && mouseY < rock[i].y+rock[i].r){
      reelUp();
      rockCaught.push(rock[i]);
      rock.splice(i,1);
      score -= 3;
      mouseX = 0;
      mouseY = 0;
    }
  } 

  for (let i=0;i<bubbles.length;i++){
    if (mouseX > bubbles[i].x-bubbles[i].r && mouseX < bubbles[i].r+bubbles[i].x && mouseY >bubbles[i].y-bubbles[i].r && mouseY < bubbles[i].y+bubbles[i].r){
      reelUp();
      bubblesCaught.push(rock[i]);
      bubbles.splice(i,1);
      score += 2;
      mouseX = 0;
      mouseY = 0;
      if (score >= 15){
        alert('You Won');
        score = 0;
      }
    }   
  }
  mouseX = 0;
  mouseY = 0;
}

function reelUp(){
  if(xString>300){ 
    xString--;
  }
  if(xString<300){
    xString++;
  }
  if(yString>500){
    yString--;
  }
  if(yString<500){
    yString++;
  }
}

