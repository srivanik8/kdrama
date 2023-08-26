import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase  , ref , push , onValue , remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://kdrama-cbd6b-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const dramaListInDB = ref(database , "dramalist")


appSettings;

const dramalistEl = document.getElementById("dramalist")
const name = document.getElementById("data-title")


onValue(dramaListInDB , function(snapshot) {
    let tasksArray = snapshot.val()


    for (let taskID in tasksArray) {
        if(tasksArray.hasOwnProperty(taskID)) {
            let task = tasksArray[taskID]
            let value1 = task.rating;
            let value2 = task.title;
            let value3 = task.image;
            let value4 = task.date;

            //dramalistEl.innerHTML += `<p>Task ID: ${taskID}</p>`;
            //dramalistEl.innerHTML += `<p>Value 1: ${value1}</p>`;
            //dramalistEl.innerHTML += `<h1>Value 2: ${value2}</h1>`;
            //dramalistEl.innerHTML += `<img src="${value3}" />`;
            if (!isDramaTitleDisplayed(value2)) {
            let rating = document.createElement("h3")
            rating.textContent = value1;
            rating.classList.add("rat");

            let date = document.createElement("h3")
            date.textContent = value4;
            date.classList.add("dat");


            let image = document.createElement("img")
            image.src = value3
            image.alt = "Image"
            image.classList.add("kimchi");

            let button = document.createElement("button")
            button.textContent = "✔  watch-later"
            button.classList.add("but");

            button.addEventListener("click", function() {
                let exactLocationOfTaskInDB = ref(database , `dramalist/${taskID}`)
                remove(exactLocationOfTaskInDB)
                deleteDramaFromScreen(image); 
                console.log("Task")
                
              
           })
    // Remove the drama from the screen
          
            

            let title = document.createElement("h1")
            title.textContent = value2;
            
            title.classList.add("title");

            let div = document.createElement("div")
            div.classList.add("remaining")

            let taskdiv = document.createElement("div")
            taskdiv.classList.add("task")
            taskdiv.append(rating, date, button)

            div.append(image , title, taskdiv )
            dramalistEl.append(div)


            markDramaTitleAsDisplayed(value2);
            } 

        
    }
    }
}  
)
const displayedDramaTitles = new Set();

function isDramaTitleDisplayed(title) {
    return displayedDramaTitles.has(title);
}

function markDramaTitleAsDisplayed(title) {
    displayedDramaTitles.add(title);
}
function deleteDramaFromScreen(imageElement) {
    // Remove the parent div containing the drama info from the screen
    const dramaDiv = imageElement.parentElement;
    dramaDiv.remove();
}











