// Code your solution in this file!
const distanceFromHq = 42;
function distanceFromHqInBlocks(block) {
    return Math.abs(block - distanceFromHq);
}

function distanceFromHqInFeet(block) {
    const blockInFeet = 264; 
    // return Math.abs(block - distanceFromHq) * blockInFeet;

    if (distanceFromHq >= block){
      return (distanceFromHq - block) * blockInFeet;
    }

    else if (block >= distanceFromHq){
      return (block - distanceFromHq) * blockInFeet;
    }
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264;
    let distance;
    if(startBlock >= endBlock){
      return (startBlock - endBlock) * blockInFeet;
    }
    else if(endBlock >= startBlock){
      return (endBlock - startBlock) * blockInFeet;
    }

    return distance;
}

function calculatesFarePrice(start, destination) {
    const blockInFeet = 264; 
  
    const distanceInFeet = Math.abs(start - destination) * blockInFeet;
  
    
    if (distanceInFeet <= 400) {
      return 0; 
    } 
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const fare = (distanceInFeet - 400) * 0.02;
      return fare;

    } 
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } 
    else {
      return 'cannot travel that far'; 
    }
}