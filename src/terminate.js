let numberOfRows=60;
let numberOfCols=120;

const getboundry = function(direction){
  let limit ;
  if(direction=='east'||direction=='west')
    return limit=[0,numberOfCols];
  return limit=[0,numberOfRows];
}

const isEnd = function(x,y,direction){
  if(direction=='east'|| direction == 'west')
    let xBoundry = getboundry(direction);
    return xBoundry.includes(x);
  }
  let yBoundry = getboundry(direction);
  return yBoundry.includes(y);
}
isEnd('east');
