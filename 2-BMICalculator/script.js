const button = document.querySelector("button");
button.addEventListener("click", function(e) {
    e.preventDefault()
    console.log(e);
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let bmi = Math.round(weight/((height/100) ** 2),2);
    // console.log(bmi)
    if (!bmi) {
        alert("Enter Valid Height and Weight");
        document.querySelector("#height").value = '';
        document.querySelector("#weight").value = '';
        document.querySelector("#results").innerText = "--";

    }
    else{
        let result = document.querySelector("#results");
        result.innerText = bmi;
        // console.log(height);
        // console.log(weight);
        console.log(result);
    }


})