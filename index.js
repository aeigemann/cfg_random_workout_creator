function changeBackgroundColor(){
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "red";
    }
}

function changeBackgroundImage() {
    let selectBox = document.getElementById("workout-type");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;

    outputSection = document.getElementById("random-workout-output-section")
    
    // Depending on the selected value, change the background image
    if (selectedValue === "weights") {
        outputSection.style.backgroundImage = "url('images/lifting-weights.jpg')";
    } else if (selectedValue === "endurance") {
        outputSection.style.backgroundImage = "url('images/runner.jpg')";
    } else if (selectedValue === "yoga") {
        outputSection.style.backgroundImage = "url('images/yoga-workout.jpg')";
    } else if (selectedValue === "mix") {
        outputSection.style.backgroundImage = "url('images/mix-image.jpg')";
    }

    // Center the background image
    outputSection.style.backgroundPosition = "center";
    outputSection.style.backgroundRepeat = "no-repeat";
    outputSection.style.backgroundSize = "cover";
}

function generateWorkout(){

    clearUnorderedList()
    let workoutLength = document.getElementById("workout-length").value 
    let workoutType = document.getElementById("workout-type").value
    if(workoutLength == "short"){
        numberOfExercises = 3;
    } else if(workoutLength == "medium"){
        numberOfExercises = 5;
    } else {
        numberOfExercises = 7;
    }

    let workoutsToChooseFrom = getWorkoutToChooseFrom(workoutType)
    let workoutArray = getWorkoutArray(workoutsToChooseFrom, numberOfExercises)
    let unorderedList = document.getElementById("workout-list") 

    workoutArray.forEach((element) => {
        let li = document.createElement("li"); // Create a new li element
        li.textContent = element; // Set the text content of the li element
        unorderedList.appendChild(li); // Append the li element to the ul element
    });
}

function getWorkoutToChooseFrom(workoutType){
    if(workoutType == "weights"){
        workoutsToChooseFrom = [...workoutHashMap["weights"]];
    } else if(workoutType == "endurance"){
        workoutsToChooseFrom = [...workoutHashMap["endurance"]];
    } else if(workoutType == "yoga"){
        workoutsToChooseFrom = [...workoutHashMap["yoga"]];
    } else {
        workoutsToChooseFrom = workoutHashMap["weights"].concat(workoutHashMap["endurance"])
        workoutsToChooseFrom.concat(workoutHashMap["yoga"])
    }
    return workoutsToChooseFrom
}

function getWorkoutArray(workoutsToChooseFrom, numberOfExercises){
    let workoutArray = []
    while(workoutArray.length < numberOfExercises){
        let randomNumber = Math.floor(Math.random() * (workoutsToChooseFrom.length - 1));
        workoutArray.push(workoutsToChooseFrom.splice(randomNumber, 1)[0]);
    }

    return workoutArray

}

function clearUnorderedList(){
    // Assuming your ul has an id "workout-list"
    let ul = document.getElementById("workout-list");

    // Loop through each li element and remove it
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

// open and close sidemenu on small screens
function openMenu(){
    document.getElementById("sidemenu").style.display = "block";
    document.getElementById("fa-solid fa-bars").style.display = "none";
}

function closeMenu(){
    document.getElementById("sidemenu").style.display = "none";
    document.getElementById("fa-solid fa-bars").style.display = "block"
}

// open and close popups
function openColorPopup(){
    closeMenu()
    document.getElementById("change-color-popup").style.display = "block";
}

function closeColorPopup(){
    document.getElementById("change-color-popup").style.display = "none";
}

function openFontPopup(){
    closeMenu()
    document.getElementById("change-font-popup").style.display = "block";
}

function closeFontPopup(){
    document.getElementById("change-font-popup").style.display = "none";
}

// change site color
function changeColor(color){
    closeColorPopup()
    items = document.getElementsByClassName("changeableColor");
    for( i = 0; i < items.length; i++){
        items[i].style.color = color;
    }
    items = document.getElementsByClassName("changeableBackgroundColor");
    for( i = 0; i < items.length; i++){
        items[i].style.backgroundColor = color;
    }
}

function changeFont(font){
    closeFontPopup()
    items = document.getElementsByClassName("changeableFont");
    for( i = 0; i < items.length; i++){
        items[i].style.fontFamily  = font;
    }
}

let workoutHashMap = {
    "weights": ["Bench Press", "Squats", "Deadlifts", "Bicep Curls", "Tricep Extensions", "Shoulder Press", "Lunges", "Leg Press", "Pull-ups", "Barbell Rows"],
    "endurance": ["Running", "Cycling", "Swimming", "Jumping Jacks", "Burpees", "Mountain Climbers", "Jump Rope", "High Knees", "Box Jumps", "Rowing"],
    "yoga": ["Downward-Facing Dog", "Warrior I", "Warrior II", "Tree Pose", "Cobra Pose", "Child's Pose", "Plank Pose", "Bridge Pose", "Chair Pose", "Corpse Pose"]
};