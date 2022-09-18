//Go button click listener
document.getElementById('go').addEventListener('click', menu);
let output = document.getElementById('output');
let randNum = randomInt(5,10);
console.log(randNum);
function menu() {
  // Get value of menu select element
  let selection = document.getElementById('menu').value;
  //analyze input and output the info
  //output if user picks all fish 
  if(selection == 'option1'){
    let count=0;
    output.innerHTML = "You selected option 1. Here is a legend of what the color of each fish represents: <p>";
    output.innerHTML += ' Red: Nothern Red Snapper <p> Orange: Yelloweye Rockfish <p> Yellow: Yellow Perch Fish <p> Cyan: Siamese Beta Fish <p> Black: Black Cod Fish <p> White: Channel Catfish <p> Pink: Bacaccio Fish <p> Purple: Pseudochromis Fish <p> Magenta: Magenta Dottyback Fish';
  //output if user picks backpack
  }else if(selection == 'option2'){
    output.innerHTML = "You selected option 2. Here are all the things you caught: <p>";
    output.innerHTML += 'Fish: ' + fishCaught.length + '<p> Rocks: ' + rockCaught.length +'<p> Bubbles: ' + bubblesCaught.length; 
  }
}