'use strict';
var numberOfShapes;
var shapes=[];
var sides=[];
var shapeCount=0;
var sideCount=0;
for (let j = 0; j < process.argv.length; j++) {  
   if (j==2) numberOfShapes=process.argv[j];
   if (j>2 && j<=2+Number(numberOfShapes))
   {
     shapes[shapeCount]=process.argv[j]
     shapeCount++;
   }
   if (j>2+Number(numberOfShapes))
   {
      sides[sideCount]=process.argv[j]
      sideCount++;
   }
}
//console.log(numberOfShapes);
//console.log(shapes);
//console.log(sides);
var claculateArea =(shape,side) =>{
let promise1 = new Promise( (resolve, reject) => {
  
  switch(shape) {
    case "rectangle":
      if (side.length!=2)
        reject([-1]); 
      resolve(side[0]*side[1]); 
      break;
    case "circle":
      if (side.length!=1)
        reject('[-1]'); 
      resolve(side[0]*3.14); 
      break;
    case "triangle":
      if (side.length!=3)
        reject('[-1]'); 
      const perimeter = (Number(side[0])+ Number(side[1]) + Number(side[2]))/2;
      const area =  Math.sqrt(perimeter*((perimeter-side[0])*(perimeter-side[1])*(perimeter-side[2]))).toFixed(2);;
      resolve(area);
      break;  
    case "square":
      if (side.length!=1)
        reject('[-1]'); 
      resolve(side[0]*side[0]);
      break;

    default:
    reject('[-1]'); 
  }

  
}) 
return promise1;

};


//Second part 
//define the actions for when the conditions are fulfilled
/*claculateArea(shapes[0],sides).then( (message) => {
   console.log("resolve is "+message); 
   }).catch( (message) => {
    console.log("failed message is "+message);
})*/

let getAreas=(shapes,sides)=>{
   let sideCounter=-1;
   let side=[];
   let promises=[];
    shapes.forEach(shape=>{
      side=[];
      switch(shape) {
        case "rectangle":
           sideCounter++;
           side[0]=sides[sideCounter];
           sideCounter++;
           side[1]=sides[sideCounter];
          break;
        case "circle":
            sideCounter++;
            side[0]=sides[sideCounter];
            

          break;
        case "triangle":
          sideCounter++;
          side[0]=sides[sideCounter];
          sideCounter++;
          side[1]=sides[sideCounter];
          sideCounter++;
          side[2]=sides[sideCounter];
          break;  
        case "square":
          sideCounter++;
          side[0]=sides[sideCounter];
          break;

      }
      //console.log(shape,side);
      promises.push(claculateArea(shape,side));
    
      

    });
    return promises;
}

Promise.all(getAreas(shapes,sides)).then((message)=> console.log(message)).catch((message)=>console.log(message));