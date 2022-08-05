let response = prompt("What would you rate this site 1-5?");
let parsed = parseInt(response)

while (parsed > 5 && parsed < 5 && typeof parsed == "number") {
    alert("1 through 5 please!");
    response = prompt("What would you rate this site 1-5?");
    parsed = parseInt(response);
    

};
 let somethingElse = prompt("What's your favorite color?");

if (somethingElse == "purple"){
    document.write("Mine too!");
    console.log("Mine too!");
}

else {
    let somethingElse = prompt("Wrong. Try again. Hint. Red + Blue");
document.write("Cleary you are a person of poor taste.")
console.log(somethingElse);

}

   

    


alert("Thank You!");

for (let i = 0; i < parsed; i++){
    document.write("<img src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png'/>");
};


