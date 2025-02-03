// Imperative
function cookSteak(steakWeight, desiredDoneness) {
  let grillTemperature = 0;
  let steakTemperature = 20; // Assuming room temperature start

  // Step 1: Preheat the grill
  grillTemperature = 204; 
  console.log(`Grill preheated to ${grillTemperature}°C.`);

  // Step 2: Season the steak
  const seasoning = 'Salt and Pepper';
  console.log(`Seasoning steak with ${seasoning}.`);

  // Step 3: Cook the steak
  while (steakTemperature < desiredDoneness) {
      steakTemperature += steakWeight * 0.02; // Simulate heat absorption
      console.log(`Cooking... Steak temperature is now ${steakTemperature.toFixed(2)}°C.`);

      if (steakTemperature >= desiredDoneness) {
          break; // Steak is ready
      }
  }

  // Step 4: Serve the steak
  return 'Steak is ready to serve!';
}

// Usage example:
const result = cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
console.log(result);
