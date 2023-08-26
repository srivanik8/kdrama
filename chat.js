//collapsible

var coll = document.getElementsByClassName("collapsible");

for (let i=0; i<coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function getTime() {
    let today = new Date();

    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours; // 05.19
    }
    if (minutes < 10) {
        minutes = "0" + minutes; // 05.19
    }

    let time = hours + ":" + minutes;
    return time;


}

function firstBotMessage() {
    let firstMessage = "Did someone mention K-dramas? I'm all ears!";
    document.getElementById("botStartMessage").innerHTML = `<p class="botText"><span>` + firstMessage + `</span></p>`;

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);

    let botHTML = `<p class="botText"><span>` + botResponse + `</span></p>`;
    $("#chatbox").append(botHTML)

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "";
    }

    console.log();
    let userHTML = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML)
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    } , 1000)


}

function buttonSendText(sampletext) {
    let userHTML = `<p class="userText"><span>` + sampletext + `</span></p>`;

    $("#textInput").val("");
    $("#chatbox").append(userHTML)
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("heart");
}


// press enter to send message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
})


