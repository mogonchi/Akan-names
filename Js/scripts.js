var akan = function(cc, yy, mm, dd, g) {
    var femaleNames = ["Akosua", "Adwao", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var day = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7
    day = Math.trunc(day)
    if (g === "Female") {
        alert(femaleNames[day]); 
    } else {
        alert(maleNames[day]);
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