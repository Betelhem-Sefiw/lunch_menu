// =========================================================
// YOUR 6 ORIGINAL FUNCTIONS
// =========================================================

const lunches = [];

function addLunchToEnd(array, string){
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  document.getElementById("logMessage").innerText = `${string} added to the end of the lunch menu.`;
  showLunchMenu(array);
  return array;
}

function addLunchToStart (array, string){
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  document.getElementById("logMessage").innerText = `${string} added to the start of the lunch menu.`;
  showLunchMenu(array);
  return array;
}

function removeLastLunch(array){
  const removed= array.pop();
  if(removed){
    console.log(`${removed} removed from the end of the lunch menu.`);
    document.getElementById("logMessage").innerText = `${removed} removed from the end of the lunch menu.`;
  }
  else{
    console.log("No lunches to remove.");
    document.getElementById("logMessage").innerText = "No lunches to remove.";
  }
  showLunchMenu(array);
  return array;
}

function removeFirstLunch(array){
  const remove_first=array.shift();
  if(remove_first){
    console.log(`${remove_first} removed from the start of the lunch menu.`);
    document.getElementById("logMessage").innerText = `${remove_first} removed from the start of the lunch menu.`;
  }
  else{
    console.log("No lunches to remove.");
    document.getElementById("logMessage").innerText = "No lunches to remove.";
  }
  showLunchMenu(array);
  return array;
}

function getRandomLunch(array){
  if(array.length === 0){
    console.log("No lunches available.");
    document.getElementById("logMessage").innerText = "No lunches available.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  const select = array[randomIndex];

  console.log(`Randomly selected lunch: ${select}`);
  document.getElementById("logMessage").innerText = `Randomly selected lunch: ${select}`;
  showLunchMenu(array);

  return select;
}

function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
    document.getElementById("menuOutput").innerText = "The menu is empty.";
    return;
  }

  console.log(`Menu items: ${array.join(", ")}`);
  document.getElementById("menuOutput").innerText = array.join(", ");
}

// =========================================================
// CONNECT BUTTONS TO YOUR FUNCTIONS
// =========================================================

// Helper to safely get user input and clear the text box
function getInputValue() {
  const input = document.getElementById("lunchInput");
  const value = input.value.trim();
  
  if (value === "") {
    document.getElementById("logMessage").innerText = "Please type a lunch item first!";
    return null;
  }
  
  input.value = ""; // Clear the text box after reading
  return value;
}

// Connect buttons to JavaScript functions
document.getElementById("addEndBtn").addEventListener("click", function() {
  const food = getInputValue();
  if (food) addLunchToEnd(lunches, food);
});

document.getElementById("addStartBtn").addEventListener("click", function() {
  const food = getInputValue();
  if (food) addLunchToStart(lunches, food);
});

document.getElementById("removeEndBtn").addEventListener("click", function() {
  removeLastLunch(lunches);
});

document.getElementById("removeStartBtn").addEventListener("click", function() {
  removeFirstLunch(lunches);
});

document.getElementById("randomBtn").addEventListener("click", function() {
  getRandomLunch(lunches);
});