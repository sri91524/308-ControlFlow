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
const startingPlant = 20;


//? Calculating max. plant capacity
const maxPlantCapacity = totalArea / areaPerPlant;
console.log(`Max. Garden capacity           : ${Math.round(maxPlantCapacity)} Plants`);

const numberOfPlantWeek1 = startingPlant * 2;
const numberofPlantWeek2 = numberOfPlantWeek1 * 2;
const numberofPlantWeek3 = numberofPlantWeek2 * 2;

console.log(`Week1 - Number of Plants       : ${numberOfPlantWeek1}`);
console.log(`Week2 - Number of Plants       : ${numberofPlantWeek2}`);
console.log(`Week3 - Number of Plants       : ${numberofPlantWeek3}`);

console.log(`***********************************************************************`);
//? Week1 - To decide whether to prune, monitor, or plant more
if(numberOfPlantWeek1 > 0.8 * maxPlantCapacity)
{    
    console.log(`Week1 - Exceeds 80% of the capacity of the garden, Plants can be Pruned now!!`);     
}
else if(numberOfPlantWeek1 >= 0.5 * maxPlantCapacity){    
    console.log(`Week1 - 50% - 80% of the garden covered, Plants can be Monitored now!!`);    
}
else
{    
    console.log(`Week1 - Only 50% of the garden covered, plants can be PLANTED more!!`);    
}

//? Week2 - To decide whether to prune, monitor, or plant more
if(numberofPlantWeek2 > 0.8 * maxPlantCapacity)
    {        
        console.log(`Week2 - Exceeds 80% of the garden, Plants can be Pruned now!!`);        
    }
    else if(numberofPlantWeek2 >= 0.5 * maxPlantCapacity){        
        console.log(`Week2 - 50% - 80% of the capacity of the garden covered, Plants can be Monitored now!!`);        
    }
    else
    {       
        console.log(`Week2 - Only 50% of the garden covered, plants can be PLANTED more!!`);        
    }

    //? Week3 - To decide whether to prune, monitor, or plant more
if(numberofPlantWeek3 > 0.8 * maxPlantCapacity)
    {        
        console.log(`Week3 - Exceeds 80% of the capacity of the garden, Plants can be Pruned now!!`);        
    }
    else if(numberofPlantWeek3 >= 0.5 * maxPlantCapacity){       
        console.log(`Week3 - 50% - 80% of the garden covered, Plants can be Monitored now!!`);        
    }
    else
    {        
        console.log(`Week3 - Only 50% of the garden covered, plants can be PLANTED more!!`);        
    }
    console.log(`***********************************************************************`);

console.log(`==============================Part2=========================================`);

//100*(Pow(2,9))
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?






