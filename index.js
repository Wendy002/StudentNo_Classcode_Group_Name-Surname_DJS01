/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 * @param {object} props  
 * @param {number} props.initialVelocity in km/h
 * @param {number} props.accelaration - in m/s^2
 * @param {number} props.durationOfCalculation - in seconds
 * @returns {number} - in km/h
 * 
 */

const CONVERSION_RATE = 3.6    // use this convert m/s to km/h
// Given Parameters
const initialVelocity = 10000; //   The starting speed of the spacecraft in (km/h)
const acceleration = 3; // The spacecraft's acceleration in (m/s^2)
const durationOfCalculation = 3600; // seconds (1 hour)
const startingDistance = 0; // distance from reference point (km)
const initialFuel = 5000; // The starting amount of fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)



//trycatch block
try {
  const props = {
    acceleration,
    initialVelocity,             // create an object 
    durationOfCalculation
  };
  const newDistance = startingDistance + (initialVelocity*(durationOfCalculation/3600)) //calculates new distance --- cnverts sec to hour
  const remainingFuel = initialFuel- (fuelBurnRate *durationOfCalculation) //calculates remaining fuel
  const newVelocity = calcNewVel(props) //calculates new velocity based on acceleration

  console.log(`Corrected New Velocity: ${newVelocity} km/h`);
  console.log(`Corrected New Distance: ${newDistance} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);

  
} catch (error) {
  console.error("An error occurred: ", error);

}


// Pick up an error with how the function below is called and make it robust to such errors  

function calcNewVel(props) {  // pass in object
  if (!props || typeof props !== 'object') {
    throw new Error('Invalid input: props must be an object');
  }
  const {acceleration, initialVelocity, durationOfCalculation} = props; // destructure obj

   // Handle error for all the above variables
   if (typeof acceleration !== 'number' || typeof initialVelocity !== 'number' || typeof durationOfCalculation !== 'number') {
    throw new Error('Invalid input: acceleration, initialVelocity, and durationOfCalculation must be numbers');
  }

  return initialVelocity + (acceleration * durationOfCalculation * CONVERSION_RATE);  // use conversion rate to change m/s to km/h
}








