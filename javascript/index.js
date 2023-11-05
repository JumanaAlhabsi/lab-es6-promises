// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));


//   // Import the required functions
// import { obtainInstruction } from './javascript/obtainInstruction.js';
// import { getInstruction } from './javascript/getInstruction.js';


// Iteration 1 - using callbacks

displayMashedPotatoesSteps();
function displayMashedPotatoesSteps() {
  function displayStep(step) {
    getInstruction("mashedPotatoes", step, (instruction) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
      if (step < 4) {
        displayStep(step + 1);
      }
    }, (error) => console.log(error));
  }

  displayStep(0);
}

// Call the function to display mashed potatoes steps
displayMashedPotatoesSteps();




// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;

    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    const step1 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    const step2 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    const step3 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    const step4 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();


// // Bonus 2 - Promise all
async function makeBroccoli1() {
  try {
    for (let step = 0; step < 5; step++) {
      const instruction = await obtainInstruction('broccoli', step);
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    }

    // Add an additional <li> to indicate broccoli is ready
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    
    // Remove the hidden attribute from the broccoli image
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}
async function makeSteak1() {
  try {
    for (let step = 0; step < 5; step++) {
      const instruction = await obtainInstruction('steak', step);
      document.querySelector("#steak").innerHTML += `<li>${instruction}</li>`;
    }

    // Add an additional <li> to indicate steak is ready
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    
    // Remove the hidden attribute from the steak image
    document.querySelector("#steakImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

async function makeMashedPotatoes1() {
  try {
    for (let step = 0; step < 5; step++) {
      const instruction = await obtainInstruction('mashedPotatoes', step);
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${instruction}</li>`;
    }

    // Add an additional <li> to indicate mashed potatoes are ready
    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready!</li>`;
    
    // Remove the hidden attribute from the mashed potatoes image
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

// Call the function to make mashed potatoes
makeMashedPotatoes1();

// Call the function to make steak
makeSteak1();

// Call the function to make broccoli
makeBroccoli1();


async function makeBrusselsSprouts() {
  try {
    const brusselsSproutsList = document.querySelector("#brusselsSprouts");
    const brusselsSproutsImage = document.querySelector("#brusselsSproutsImg");
    const stepPromises = [];

    for (let step = 0; step < 8; step++) {
      stepPromises.push(obtainInstruction('brusselsSprouts', step));
    }

    const steps = await Promise.all(stepPromises);

    steps.forEach((step) => {
      brusselsSproutsList.innerHTML += `<li>${step}</li>`;
    });

    // Add an additional <li> to indicate Brussels sprouts are ready
    brusselsSproutsList.innerHTML += "<li>Brussels sprouts are ready!</li>";
    
    // Remove the hidden attribute from the Brussels Sprouts image
    brusselsSproutsImage.removeAttribute("hidden");
    // Get the image element
    const brusselsSproutsImage2 = document.querySelector("#brusselsSproutsImg");

// Rotate the image by 90 degrees using CSS
brusselsSproutsImage2.style.transform = "rotate(270deg)";
  } catch (error) {
    console.log(error);
  }
}

// Call the function to make Brussels Sprouts
makeBrusselsSprouts();


