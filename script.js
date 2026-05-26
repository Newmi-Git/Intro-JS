const button = document.querySelector("button");
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p")

button.addEventListener("click", function() {
    const name = prompt("What is your name?");
    const mood = prompt("Whats Todays Mood?");

    heading.textContent = `Hello, ${name}!`;
    paragraph.textContent = `Todays Mood is: ${mood}`;
        
    
    
    console.log("The button has been clicked");
    button.textContent = "Clicked!";
    
    console.log("Both Mood and Name was Succesfully Entered!")
    
})

