let response = prompt("What would you rate this site 1-5?");
let parsed = parseInt(response)

while (parsed > 5 && parsed < 5 && typeof parsed == "number") {
    alert("1 through 5 please!");
    response = prompt("What would you rate this site 1-5?");
    parsed = parseInt(response);

};

for (let i = 0; i < parsed; i++){
    alert("Thank You!")
    document.write("<img src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png'/>")
};
// if (response == "purple"){
//     document.write("Mine too!");
//     console.log("Mine too!");
// }

// else {
//     let response = prompt("Wrong. Try again.");
// document.write("Cleary you are a person of poor taste.")
// console.log(response);

// }


