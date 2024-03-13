const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons); 
console.log(body); 
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e.target)
        let color = e.target.id;
        console.log(color)
        body.style.backgroundColor = color;
    })
})

// body.style.backgroundColor = "white";