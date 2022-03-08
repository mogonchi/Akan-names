var akan = function(cc, yy, mm, dd, g) {
    var femaleNames = ["Akosua", "Adwao", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    day = daysOfTheWeek [];
    if (g === "Female") {
        alert("Your Akan name is: " + femaleNames + "and your day is" + {day} ); 
    } else {
        alert("Your Akan name is; " + maleNames + "and your day is" + {day} );
    }
}
    var button = document.getElementById("submit");

button.addEventListener("click", function(){ 
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    
    var century = year.substring(0, 2);
    var partYear = year.substring(2, 4);
    console.log(gender)
    century = parseInt(century);
    month = parseInt(month);
    partYear = parseInt(partYear);
    day = parseInt(day);
    
    akan(century, partYear, month, day, gender);
})

    // var femaleNames = ["Akosua", "Adwao", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    // var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    // var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    // let result = document.getElementById("result");
    // alert(result)
    //  button.addEventListener("click", getAkanName() {
    //     let result = result.value
    //     let akan = maleNames[result];
    //     let akan = femaleNames[result];
    //     if {
    //         femaleNames === [];
    //         let myName = femaleNames(result);
    //         let day = daysOfTheWeek(result);
    //         alert("Your akan name is" & {myName} "and you were born on" & {day};)
    //     } else{
    //         maleNames === [];
    //         let myName = maleNames(result);
    //         let day = daysOfTheWeek(result);
    //         alert("Your akan name is" & {myName} "and you were born on" & {day};)

    //     }
    // } 