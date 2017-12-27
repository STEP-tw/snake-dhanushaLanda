
const getboundry = function(direction){
  let limit ;
  if(direction=='east'||direction=='west')
    return limit=[0,numberOfCols];
  return limit=[0,numberOfRows];
}

const isEnd = function(x,y,direction){
  let boundry = getboundry(direction);
  if(direction=='east'|| direction == 'west')
    return boundry.includes(x);
  return boundry.includes(y);
}
