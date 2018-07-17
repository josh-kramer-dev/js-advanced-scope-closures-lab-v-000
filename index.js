// produceDrivingRange returns a function
//  expect(typeof produceDrivingRange()).to.equal('function')
function produceDrivingRange(blockRange){
  let actualRange = function(startingBlock, endingBlock){
    return startingBlock - endingBlock;     //get the delta between the starting and ending streets passed through as arguments?
  };
  if actualRange <= blockRange
    return `within range by ${actualRange}`;
}


// takes an argument of blockRange whic is then used to calculate if something is within range
//  let eightBlockRange = produceDrivingRange(8)
//  expect(eightBlockRange('10th', '20th')).to.equal('2 blocks out of range')
//  expect(eightBlockRange('10th', '14th')).to.equal('within range by 4')
