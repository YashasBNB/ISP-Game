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
            firstImage.src = "bangalore img.png";
            break;
        case 2:
            textContent.innerHTML = "There are most people in India, respected and feared all over the world   <br> More Than 8 Crore people are employed in their firm  ";
                firstImage.src = "bangalore palaxce.jpg";
                break;
        case 3:
            textContent.innerHTML = "There are 4 members in this family <br>";
                firstImage.src = "family image.webp";
                break;
        case 4:
            textContent.innerHTML = "The head of the family Rajendra Raj Kamal<br> The builder of Raj Kamal group his father was the founder of Raj Kamal group<br> He worked day and night in this ferm to make it one of the worlds best company  ";
                firstImage.src = "old_man-removebg-preview.png";
                firstImage.style.width = "auto";
                firstImage.style.height = "auto";
                break;
        case 5:
            textContent.innerHTML = "This is Rajendra Raj Kamals son Mukesh Raj Kamal he also helped his father<br> To build Raj Kamal group. His planning has never failed or even gone wrong  <br> He is even the founder of many of the firms which come under Raj Kamal Group and a major stakeholder of the firm ";
                firstImage.src = "vijay_father_img-removebg-preview (1).png";
                    // Increase the size of the image
                firstImage.style.width = "900px"; // Set to your desired width
                firstImage.style.height = "auto"; // Maintain the aspect ratio
                break;
        case 6:
            textContent.innerHTML = "This is Anupama Raj Kamals wife of Mukesh Raj Kamal she is the finanser of the Raj Kamal Group and MD  of this big ferm <br> A moral support for those 2 men  <br> she is even one of the Board Member of company and as veto power too ";
                firstImage.src = "vijay_mom-removebg-preview.png";
                            // Increase the size of the image
                firstImage.style.width = "500px"; // Set to your desired width
                firstImage.style.height = "auto"; // Maintain the aspect ratio
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
