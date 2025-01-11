console.log(`==============================Part1=========================================`);
//? The area in which the plants are contained is circular, with a radius of 5 meters.
//? The formula for calculating the area of a circle is PI multiplied by the radius, squared:
//? const PI = 3.1415;
//? const area = PI * radius * radius;
//? Each plant requires a minimum space of 0.8 square meters.
//? The area is starting with 20 plants.
//? The plants double in number every week.

const PI = 3.1415;
const radiusGarden = 5;
const areaPerPlant = 0.8;

//? Calculating Total Area of the Garden
//? round up to 2 decimals
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

const thresholdUpper = 80/100;
const thresholdLower = 50/100;
//? Week1 - To decide whether to prune, monitor, or plant more
if(numberOfPlantWeek1 > thresholdUpper * maxPlantCapacity)
{    
    console.log(`Week1 - Plants can be PRUNED now!!`);     
}
else if(numberOfPlantWeek1 >= thresholdLower * maxPlantCapacity){    
    console.log(`Week1 - Plants can be MONITORED now!!`);    
}
else
{    
    console.log(`Week1 - more plants can be PLANTED!!`);    
}

//? Week2 - To decide whether to prune, monitor, or plant more
if(numberofPlantWeek2 > thresholdUpper * maxPlantCapacity)
    {        
        console.log(`Week2 - Plants can be PRUNED now!!`);        
    }
    else if(numberofPlantWeek2 >= thresholdLower * maxPlantCapacity){        
        console.log(`Week2 - Plants can be MONITORED now!!`);        
    }
    else
    {       
        console.log(`Week2 - more plants can be PLANTED!!`);        
    }

    //? Week3 - To decide whether to prune, monitor, or plant more
if(numberofPlantWeek3 > thresholdUpper * maxPlantCapacity)
    {        
        console.log(`Week3 - Plants can be PRUNED now!!`);        
    }
    else if(numberofPlantWeek3 >= thresholdLower * maxPlantCapacity){       
        console.log(`Week3 - Plants can be MONITORED now!!`);        
    }
    else
    {        
        console.log(`Week3 - more plants can be PLANTED!!`);        
    }
    console.log(`***********************************************************************`);

console.log(`==============================Part2=========================================`);

//?100*(Pow(2,9))
//? The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
//? If the space remained circular, what would be the radius of this expanded garden?

const startingPlantCount = 100;

//?To calculate- Each week plant count doubles and after 10 weeks
let plantCountWeek10 = startingPlantCount * (Math.pow(2,10));

console.log(`Starting Plant Count       : ${startingPlantCount}`);
console.log(`Plant Count after Week10   : ${plantCountWeek10}`);

//?To calculate area of garden required to plant till week10
//?Area required per plant 0.8 sq. meters
let expandedArea = plantCountWeek10 * 0.8;
console.log(`Totalarea required         : ${Math.round(expandedArea *100)/100} square meters`);

let newGardenRadius = Math.sqrt(expandedArea/PI);
console.log(`New radius of the garden   : ${Math.round(newGardenRadius)} meters`);

console.log(`==============================Part3=========================================`);
//? If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.
//?Let's assign availableArea = totalArea(Part 1), requiredArea = expandedArea (Part 2)

const availableArea = totalArea; 
const requiredArea = expandedArea;

try
{
    if(requiredArea > availableArea)
    {
            throw new Error(`Available garden area ${Math.round(availableArea *100)/100} square meters is smaller than required garden area ${Math.round(requiredArea*100)/100} square \n\       meters so increase garden space to plant these ${plantCountWeek10} plants.`);
    }
}
catch(error)
{
    console.log(`${error}`);
}
finally
{
    console.log(`Plant count after week10   : ${plantCountWeek10}`);
    console.log(`Available Garden Area      : ${Math.round(availableArea *100)/100} square meters`);
    console.log(`Required Garden Area       : ${Math.round(requiredArea*100)/100} square meters`);
}

console.log(`=============================================================================`);