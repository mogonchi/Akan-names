var akan = function(yy, mm, dd, g) {
    var femaleNames = ["Akosua", "Adwao", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var dd = newDay(yy, mm, dd);
    if (g === "Female") {
        return dd && femaleNames[dd.getDay()];
    } else {
        return dd && maleNames[dd.getDay()];
    }
}
var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
var gender = document.querySelector('input[name="gender"]:checked');
var button = document.getElementById("submit");

button.addEventListener("click", function(){
    alert("name")
})