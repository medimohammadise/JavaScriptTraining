'use strict';
let json={a:1};
//Make the object constant
Object.freeze(json);
json.a=4;
console.log(json);

//Freez protect the object from changing but const rpotect reference