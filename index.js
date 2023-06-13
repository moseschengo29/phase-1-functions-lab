// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    return Math.abs(block - 42) * blockInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; // Assuming each block is 264 feet
    const distance = Math.abs(startBlock - endBlock) * blockInFeet;
    return distance;
}

function calculatesFarePrice(start, destination) {
    const blockInFeet = 264; // Assuming each block is 264 feet
  
    const distanceInFeet = Math.abs(start - destination) * blockInFeet;
  
    // Fare calculation based on distance
    if (distanceInFeet <= 400) {
      return 0; // Free sample
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      // 2 cents per foot, subtracting the first 400 free feet

      const fare = (distanceInFeet - 400) * 0.02;
      return fare 

    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // $25 flat fare for distance over 2000 feet
    } else {
      return 'cannot travel that far'; // Cannot travel over 2500 feet
    }
}