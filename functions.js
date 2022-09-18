// Helper Functions
//Functions to obtain random numbers
function randomInt(low,high){
  return Math.round(randomDec(low,high));
}

function randomDec(low,high){
  return Math.random()*(high-low) + low;
}

