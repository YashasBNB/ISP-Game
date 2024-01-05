// game.js

var state = 0; // Variable to keep track of the current state

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        changeContent();
    }
});

function changeContent() {
    var textContent = document.getElementById("text-content");
    var secondParagraph = document.getElementById("second-paragraph");
    var firstImage = document.getElementById("first-image");

    // Update the state and perform actions based on the state
    switch (state) {
        case 0:
            textContent.innerHTML = "Which that accommodates individuals from all walks of life — from the affluent to those  <br>with empty pockets.";
            firstImage.src = "vidhanasoudha.jpg"; // Update image source
            break;
        case 1:
            textContent.innerHTML = "In this busy city there is a family called Raj Kamal  <br>One of the richest family in the world <br>  and they are the owners of the firm Raj Kamal Group";
            firstImage.src = "bangalore palaxce.jpg";
            break;
        case 2:
            textContent.innerHTML = "There are most people in India, respected and feared all over the world   <br> More Than 8 Crore people are employed in their firm  ";
                firstImage.src = "vijay house.jpeg";
                break;
        // Add more cases for additional states as needed
        default:
            // Handle default case or loop back to the initial state
            state = 0;
            break;
    }

    // Increment the state for the next iteration
    state++;
}
