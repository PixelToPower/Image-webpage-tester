var name = "";

const lastname = "";


function switchscreen() {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "block";
}
function showfeedbackform() {
    document.getElementById("FeedbackForm").style.display = "block";
    document.getElementById("buttonform").style.display = "none";
}
function closeform() {
    document.getElementById("FeedbackForm").style.display = "none";
    document.getElementById("buttonform").style.display = "block";
}

document.addEventListener("keypress", (e) => {
    console.log(e.key, e.code);

    if (e.key == "Enter") {
        var response = prompt("How are you feeling today?");
        console.log(response);

    }
    else {
        alert("Press Enter to update your status..");
    }
})

for(var i=1; i<=5; i++){
    console.log(i);
}
