'use strict';
var numberOfShapes;
var shapes=[];
var values=[];
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
      values[sideCount]=process.argv[j]
      sideCount++;
   }
}
//console.log(numberOfShapes);
//console.log(shapes);
//console.log(sides);
let claculateArea =(shape,values) =>{
let promise1 = new Promise( (resolve, reject) => {
  
  switch(shape) {
    case "rectangle":
      if (values.length!=2)
        reject([-1]); 
     
      if (isNaN(values[0]) ||  isNaN(values[1]))  reject([-1]); 
      resolve(values[0]*values[1]); 
      break;
    case "circle":
    
      if (values.length!=1)
        reject([-1]); 
      if (isNaN(values[0]))  reject([-1]); 
      resolve(Number((values[0]*3.14).toFixed(2))); 
      break;
    case "triangle":
      if (values.length!=3)
        reject([-1]);
      if (isNaN(values[0]) ||  isNaN(values[1]) ||  isNaN(values[2]))  reject([-1]);     
      const perimeter = (Number(values[0])+ Number(values[1]) + Number(values[2]))/2;
      const area =  Number(Math.sqrt(perimeter*((perimeter-values[0])*(perimeter-values[1])*(perimeter-values[2]))).toFixed(2));
      resolve(area);
      break;  
    case "square":
      if (values.length!=1)
        reject([-1]); 
      if (isNaN(values[0]))  reject([-1]);   
      resolve(values[0]*values[0]);
      break;

    default:
    reject([-1]); 
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

let getAreas=(shapes,values_arr)=>{
   let sideCounter=-1;
   let side=[];
   let promises=[];
    shapes.forEach(shape=>{
      side=[];
      switch(shape) {
        case "rectangle":
           sideCounter++;
           side=values_arr[sideCounter].toString().split(',');
           //sideCounter++;
           //side[1]=sides[sideCounter];
          break;
        case "circle":
            sideCounter++;
            if (values_arr[sideCounter])
            side[0]=values_arr[sideCounter];
            

          break;
        case "triangle":
          sideCounter++;
          if (values_arr[sideCounter])
          side=values_arr[sideCounter].toString().split(',');
         /* sideCounter++;
          side[1]=sides[sideCounter];
          sideCounter++;
          side[2]=sides[sideCounter];*/
          break;  
        case "square":
          sideCounter++;
          side[0]=values_arr[sideCounter];
          break;

      }
      //console.log(shape,side);
      promises.push(claculateArea(shape,side));
      //claculateArea(shape,side).then((res)=>{

      // }).catch(error=>{console.log(error);
       // promises.push(error); return error;});
       
       
      
      

    });
    //return Promise.all(promises);
    //return Promise.all(promises.map(p=>p.catch(() => "[-1]"));
   return Promise.all(promises.filter(p=>  p.catch(()=>{return ['[-1]']
  }))).catch(e=>{return ['[-1]']});
   //.reduce((item)=>{return [item==="[-1]"]}),0);
    /*promiseValues.then(item=>{
      console.log(item.indexOf('[-1]')>0);
         if (item.indexOf('[-1]')>0)
         {
          console.log("value empty");
          promiseValues=[]; 
          promisesResult=new Promise((resolve, reject) => {resolve('[-1]');});
         }
      
    });*/
         
    //return promiseValues;

  
}

//Promise.all(getAreas(shapes,sides)).then((message)=> console.log(message)).catch((message)=>console.log(message));
let calCaulate=async (shapes,values)=>await claculateArea(shapes[0],values[0]).catch(error=>error) instanceof Promise;
let callgetArea=(shapes,values)=>getAreas(shapes,values).catch(error=>error);

if (calCaulate(shapes,values))
{
  callgetArea(shapes,values).then((res)=>{
    console.log(res.join('\n')+'\n');

  });
}
else{
  console.error('error');
}