Sports = new Mongo.Collection('Sports');

console.log("Test");
if (Sports.find().count() === 0) {
    console.log("Nothing found");
    console.log("Creating Sports fixtures");
   
    Sports.insert([
       {
           "name" : "Running"
       },
       {
           "name" : "Cycling"
       }
   ]);
}else{
    console.log("Sports" + Sports);
}