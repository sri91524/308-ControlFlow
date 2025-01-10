// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

const PI = 3.1415;
const radiusGarden = 5;
const areaPerPlant = 0.8;

//? Calculating Total Area of the Garden
const totalArea = PI * radiusGarden * radiusGarden;
console.log(`Total Area of Garden           : ${Math.round(totalArea *100)/100} square meters`);
console.log(`Area required per plant        : ${areaPerPlant} square meters`)

const week1 = 1;
const numberOfPlantWeek1 = 20;


//? Calculating Area required for the plants during week1
const areaWeek1 = numberOfPlantWeek1 * areaPerPlant;
console.log("==============Week1===============");
console.log(`Number of Plants               : ${numberOfPlantWeek1}`);
console.log(`Area required for plants       : ${areaWeek1} square meters`);

//? Calculating Area required for the plants during week2 (doubles each week)
const numberofPlantWeek2 = numberOfPlantWeek1 * 2;
const areaWeek2 = numberofPlantWeek2 * areaPerPlant;

console.log("==============Week2===============");
console.log(`Number of Plants               : ${numberofPlantWeek2}`);
console.log(`Area required for plants       : ${areaWeek2} square meters`);

//? Calculating Area required for the plants during week3 (doubles each week)
const numberofPlantWeek3 = numberofPlantWeek2 * 2;
const areaWeek3 = numberofPlantWeek3 * areaPerPlant;

console.log("==============Week2===============");
console.log(`Number of Plants               : ${numberofPlantWeek3}`);
console.log(`Area required for plants       : ${areaWeek3} square meters`);

//? Calculating 50% and 80% of Max.Capacity of the Garden
const totalArea50 = totalArea * 50/100;
const totalArea80 = totalArea * 80/100;

console.log(`80% Max.Capacity of Garden     :${Math.round(totalArea80 *100)/100} square meters`);
console.log(`50% Max.Capacity of Garden     :${Math.round(totalArea50 *100)/100} square meters`);

//? To decide whether to prune, monitor, or plant more
if(areaWeek3 < totalArea50)
{
    console.log(`***********************************************************************`);
    console.log(`Only 50% of the garden covered, plants can be PLANTED more!!`);
    console.log(`***********************************************************************`);
}
else if(areaWeek3 >=totalArea50 && areaWeek3 <= totalArea80){
    console.log(`***********************************************************************`);
    console.log(`50% - 80% of the garden covered, Plants can be Monitored now!!`);
    console.log(`***********************************************************************`);
}
else if(areaWeek3 > totalArea80)
{
    console.log(`***********************************************************************`);
    console.log(`Exceeds 80% of the garden, Plants can be Pruned now!!`);
    console.log(`***********************************************************************`);    
}
//100*(Pow(2,9))
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

console.log(`==============================Part2=========================================`);








