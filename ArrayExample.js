let cars = ["Maruti", "Toyota", "Honda", "Mahindra", "Renult"];
let bikes = new Array("Hero", "Bajaj", "Tvs");

let slicedCars = cars.slice(1,4); //1,2,3 indexes only
console.log("Cars =>",cars); 
console.log("slicedCars =>",slicedCars);

console.log("--------------------------");

let copyCars = [...slicedCars]; //sliced values are stored in copycars
console.log("copy cars =>",copyCars); //displaying copycars

console.log("--------------------------");

let tempCars = cars.slice(1); //0th index skipped & rest all stored
console.log("cars =>",tempCars);

console.log("--------------------------");

let pushCar = cars.push("Ferrari"); //new value inserted at end
console.log("push cars ->",pushCar); //total count displayed
console.log("push cars array->",cars); //display all values


console.log("===========================");

let popCar = cars.pop(); //last car removed
console.log("pop cars =>",popCar); //displayed poped car
console.log("pop cars array =>",cars); //display cars
console.log(cars[4]); //display at that index


console.log("***********************");

cars[cars.length] = "Hundai";
console.log(cars.length)
console.log("cars =>",cars);

console.log("--------------------------");

let addFirst = cars.unshift("MG");//added to 1st index
console.log("add first car =>",cars);
console.log("add first =>",addFirst); //total count of cars[]

console.log("===========================");

let shiftCar = cars.shift(); //removed 1st element
console.log("shiftCar  =>",shiftCar); //removed data showing
console.log("cars =>",cars); //all cars[] data

console.log("***********************");

cars.splice(0,2,"Volvo","Benz","Tata"); //0th index add 3 elements(volvo,benz,tata) 
                                        //from 0th elements start remove 2 elements
console.log("cars =>",cars);

console.log("+++++++++++++++++++++++++++++++++++");

let vehicals = cars.concat(bikes);
console.log("vehicals",vehicals);

console.log("***********************");

let stringVehical = [...cars,...bikes].toString();
console.log("new vehicals(string data)  ==>> ",stringVehical);

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

let sortCars = cars.sort();
console.log("Sort cars =>",sortCars);

console.log("***********************");

let joinArray = vehicals.join(" <> ");
console.log("join array ",joinArray);


console.log("+++++++++++++++++++++++++++++++++++");

let allVehicals = "";
for(let tempVehical of vehicals){
    allVehicals = allVehicals + tempVehical + " ";
}
console.log("All vehicals:",allVehicals);