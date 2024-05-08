/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; //   The starting speed of the spacecraft in (km/h)
const acceleration = 3; // The spacecraft's acceleration in (m/s^2)
const durationOfCalculation = 3600; // seconds (1 hour)
const startingDistance = 0; // distance from reference point (km)
const initialFuel = 5000; // The starting amount of fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const newDistance = d + (vel*time) //calculates new distance
const remainingFuel = fbr*time //calculates remaining fuel
const newVelocity = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






