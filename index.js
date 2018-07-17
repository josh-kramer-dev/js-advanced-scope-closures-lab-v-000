// produceDrivingRange returns a function
//  expect(typeof produceDrivingRange()).to.equal('function')
function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
    let start = parseInt(startingBlock); //ensure that the passed in argument is an integer using parseInt
    let end = parseInt(endingBlock); // same, but for the end
    let distanceToTravel = Math.abs(end - start)  //get the delta between the starting and ending streets
    let difference = blockRange - distanceToTravel; //find the delta between the distanceToTravel and the given blockRange

    if (difference > 0) {        //if the difference is positive, the ride is in range, otherwise it's out of range
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}
