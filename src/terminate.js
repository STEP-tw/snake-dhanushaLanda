
const getboundry = function(direction){
  let limit ;
  if(direction=='east'||direction=='west')
    return limit=[0,numberOfCols];
  return limit=[0,numberOfRows];
}

const isEnd = function(x,y,direction){
  let boundry ;
  if(direction=='east'|| direction == 'west'){
     boundry = getboundry(direction);
    return boundry.includes(x);
  }
  boundry = getboundry(direction);
  return boundry.includes(y);
}
