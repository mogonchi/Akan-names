var akan = function(cc, yy, mm, dd, g) {
    var femaleNames = ["Akosua", "Adwao", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
    day = Math.floor(day) 
    if (g === "Female") {
        console.log(day)
        alert("Your Akan name is: " + femaleNames[day] + "  and your day is  " + daysOfTheWeek [day]); 
    } else {
        alert("Your Akan name is; " + maleNames[day] + "and your day is  " + daysOfTheWeek [day]);
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
    console.log(century)
    console.log(year)
    console.log(month)
    console.log(day)
    console.log(partYear)
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