const headQ = 42
const feet = 264 

function distanceFromHqInBlocks(destination) {
    if (destination > 42){
        return destination - headQ;
    }
    else  {
        return headQ - destination;
    }
  }
  
  function distanceFromHqInFeet(headQ) {
    return distanceFromHqInBlocks(headQ) * feet;
}

function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination - start) * feet;
    }
    else {
        return (start - destination) * feet;
    }
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet (start, destination);
    if (distance <= 400 ) {
        return 0;
    } else if ( distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'; 
       }
    }
        