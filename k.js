
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase  , ref , push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://kdrama-cbd6b-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)



appSettings;


const addButtonEl = document.querySelectorAll(".add")
const dramaListInDB = ref(database , "dramalist")
const uniqueItems = new Set();



if(localStorage.getItem("buttonClicked")) {
    addButtonEl.disabled = true
}

function disableButton() {
    document.querySelectorAll(".add").disabled = true;
    console.log("disabled button clickeded")
}
disableButton();


addButtonEl.forEach(button => { 
    button.addEventListener('click' , event => {




        localStorage.setItem("buttonClicked","true");
        console.log("buttonClicked");

        const title = event.target.getAttribute("data-title");
        const image = event.target.getAttribute("data-image");
        const date = event.target.getAttribute("data-date");
        const rating = event.target.getAttribute("data-rating");

    
            const movieInfo = {
                title: title,
                image: image,
                date: date,
                rating: rating
            };

            uniqueItems.add(title)
            push(dramaListInDB, movieInfo)
            console.log(movieInfo)
    

        


    })
})






