function distanceBetweenTwoPoint (x1,y1,x2,y2) {
  const distance = (((x1 - x2) ** 2) + ((y1 - y2) ** 2)) ** 0.5;
  return distance;
}

const result = distanceBetweenTwoPoint(1,2,3,4);
console.log(result);
